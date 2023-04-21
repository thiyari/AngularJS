import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="clicked($event)">Click</button>
  <input type="text" [(ngModel)]="text" name="text" (keyup.enter)="showText($event)"/>
  <h1>{{text}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text:String = ""; 

  constructor(){
    this.text = 'Hello';
  }
  title = 'events-and-binding';
  clicked(event){
    console.log(event.type);
    this.text = 'Button Clicked';
  }
  showText(event){
    //console.log(event.target.value);
    console.log(this.text);
  }
} 
  