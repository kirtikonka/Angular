import { Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  a="itvedant";
  b="HELLO";
  
  date= new Date();
  
  c=5000;
  
  arr=
  [
  {'name':'ABC','age':10}, 
  {'name':'DEF','age':12},
  {'name':'GHI','age':15},
  {'name':'JKL','age':20}
  ]
  
}
