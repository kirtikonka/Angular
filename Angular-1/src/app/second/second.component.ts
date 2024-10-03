import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  scolor="brown";
  mcolor = "color:cyan;text-decoration:underline;";

  //second.component.scss
  sclass="c1";
  mclass={
    c1:true,
    c2:true,
    c3:false
  }

  //Funtion in TS
  fun(name:any)
  {
    alert("Function Called "+name);
  }

  mydata:any;
  fun1(name:any)
  {
    this.mydata=name;
  }

  //Calculator
  f:any;
  s:any;
  result:any;
  ope:any;

  calci()
  {
    if(this.ope=="+")
    {
      this.result=parseInt(this.f)+parseInt(this.s);
    }
    if(this.ope=="-")
    {
      this.result=parseInt(this.f)-parseInt(this.s);
    }
    if(this.ope=="*")
    {
      this.result=parseInt(this.f)*parseInt(this.s);
    }
    if(this.ope=="/")
    {
      this.result=parseInt(this.f)/parseInt(this.s);    
    }
  }

  /*
  fun2(a:number,b:number,c:number)
  {
    if()
    {
      c=a+b;
      return(c);
    }
    if()
      {
        c=a-b;
        return(c);
      }
    if()
    {
      c=a*b;
      return(c);
    }
    if()
    {
      c=a/b;
      return(c);
    }
  } 
  */
  myvalue:any;
  my:any;



}
