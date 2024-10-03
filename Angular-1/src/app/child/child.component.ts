import { CommonModule, NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NgFor, NgSwitch, NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  myvalue:string="";

  display(x:string)
  {
  this.myvalue=x;
  }
  
  myvalue1:string=""; //string
  //myvalue1=""; //any
  //myvalue1:any; //any
  
  display1(x:string)
  {
  //console.log(x);
  this.myvalue1=x;
  }
  check:boolean=true;
  
  checkcondition:boolean=true;
  
  checknum:number=45;
  
  color:string="red";
  
  a:number=5
  b:number=3
  ope:string="+"
  
  arr=['Red','Green','Blue','Yellow','Panda']
  
  arr2=[1,2,3,4,5,6,7,8,9]
  
  obj1=
  [
  {'id':100,'name':'ABC','salary':1000}, 
  {'id':200,'name':'DEF','salary':2000}, 
  {'id':300,'name':'GHI','salary':3000}, 
  {'id':400,'name':'JKL','salary':4000}
  ]
  
  
}
