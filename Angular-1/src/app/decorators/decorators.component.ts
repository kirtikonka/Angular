import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-decorators',
  standalone: true,
  imports: [],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.scss'
})
export class DecoratorsComponent {
@Input() idata:any;

@Output() name=new EventEmitter<any>();
@Output() salary=new EventEmitter<any>();
@Output() dob=new EventEmitter<any>();

func()
{
  this.name.emit("Madhav");
  this.salary.emit(1000);
  this.dob.emit("18-05-2000");
}
}
