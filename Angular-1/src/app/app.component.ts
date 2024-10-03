import { Component, Input, NgModule, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from './second/second.component';
import { ChildComponent } from "./child/child.component";
import { Child2Component } from "./child2/child2.component";
import { PipesComponent } from "./pipes/pipes.component";
import { FormsModule } from '@angular/forms';
import { ThirdComponent } from "./third/third.component";
import { DecoratorsComponent } from './decorators/decorators.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent, ChildComponent, Child2Component, PipesComponent, ThirdComponent, DecoratorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-1';
  myimg="Teacher.png";
  mycolor="Red";
  name="Masstech";
app: any;
root: any;

//Child Starts

//Passing Arrays
ename="Itvedant"
x=[10,20,30,40,50]
y=['red','green','blue','yellow','black'] 
col="red"

//Passing Objects
emp={
'name':'Itvedant',
'id':101,
'salary':12000
}

col2="color:green; font-size:30px; text-decoration:underline;";
	
x1="x"

pc1=true
pc2=true
pc3=true
mycolors= {
"c1":this.pc1,
"c2":this.pc2,
"c3":!this.pc3    //false(!)
}

con=true

mytext=""

@NgModule({
imports:[ FormsModule
]
})

fun() {
alert("This is a function");
}

setcolor='';
redfun()
{
this.setcolor="red";
}
bluefun()
{
this.setcolor="blue";
}

str="";
showFun()
{
//console.log("This is Console function");
this.str="This is console";
}


//Child2 Starts

xvalue="Input Decorator";

yvalue:any;

aevent:any;
bevent:any;

public checkfn:boolean=true;

InputName="Hi Kirti";

getname:any;
getsalary:any;
getdob:any;

}
