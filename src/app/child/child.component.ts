import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  constructor() { }
  //To get data from parent
  @Input()
  myNumber2:string;
  private myNumber: number;  
  //This is how access the the data which is coming from perant component
  @Input() 
  set myNewNumber(number: number){
    this.myNumber = number;
  }
  get myNewNumber(){
    return this.myNumber;
  }

  //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
  //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
  //Every time When data coming/changing from parent component to the child component ngOnChange() will be executed
  //first ngOnChange() will be executed then ngOnInit() will be exected
  ngOnChanges(changes: SimpleChanges){
    //debuger will help to stop the execution of the programe here
    //this is only for testing purpose
    debugger;
    //"changes: SimpleChanges" will get the changes
    const newNumberChange: SimpleChange = changes.myNewNumber;
    console.log('Previous Value - (ng on changes)', newNumberChange.previousValue);
    console.log('Current Value - (ng on changes)', newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
  }
  
  //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
  //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
  //ngOnInit() will be executed only one time
  ngOnInit() {
    debugger;
   console.log('ngOninit value', this.myNewNumber);
 }
  
  //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
  //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
  //All the child affected parent changes will come to the this method after entering the 
  // "ngOnChanges()" method so if parent has passed the reference to the child (Eg -: as a class)
  // only enter the this method, it will not enter the "ngOnChange method"
  ngDoCheck(){
    debugger;
    console.log(this.myNumber2);
 }

 //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
 //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
 // It will executed only one time " ngDoCheck()" get executed
 //if you want to execute it again you will have to Refresh the application
 // we use this hook when we want to do some modification after one time some variable was initialized
 ngAfterContentInit(){
     debugger;
     console.log("Yheeeeeee..");
  }

//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//This was execute after the executing the "ngAfterContentInit()" even "ngAfterContentInit()" is not executed, if "ngDoCheck()"
//executed definitly this method will be executed 
ngAfterContentChecked(){
  debugger;
  console.log("This was executed after the ngAfterContentInit()");
}

//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//This was execute after the executing the "ngAfterContentChecked()" 
//So All the grand child component should be updated before the this life cycle
// hook get executed. that is the very important part of the this life cycle hook
ngAfterViewInit(){
  debugger;
  console.log("Thid was executed after ngAfterContentChecked");
}

//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//This was execute after the executing the "ngAfterContentInit()" 
ngAfterViewChecked(){
  debugger;
  console.log("This was executed after ngAfterContentInit()");
}

//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ngOnDestroy(){
  debugger;
  console.log("Component has been destroyed..");
}
 
}
