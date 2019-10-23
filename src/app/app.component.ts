import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lifecycle';
  isVisible: boolean = true;
  name:string = "jpssasadara";

  user = {
    name: "jayaweera"
  }
  updateValue(){
    this.user.name = "jps";
  }

  switchVisibility(){
    this.isVisible =! this.isVisible;
  }

  private number: number =234232;
  //implementing getter
  get counter(){
    return this.number;
  }
  //implementing setter
  set counter(value){
    this.number = value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}