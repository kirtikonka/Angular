import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {

  @Input('inputdata') x:any;
  @Output() cdata= new EventEmitter<string>();
  @Output() a=new EventEmitter<number>();
  @Output() b=new EventEmitter<number>();
  
  setFun()
  {
  this.cdata.emit("Coming from Input Data");
  }
  add()
  {
  this.a.emit(7);
  this.b.emit(5);
  }
  
}
