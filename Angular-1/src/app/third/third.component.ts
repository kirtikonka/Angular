import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss'
})
export class ThirdComponent {
  // checknum:number=0;

  // arrobj=[
  //   {'id':1,'name':'ABC','salary':1000}, 
  //   {'id':2,'name':'DEF','salary':2000}, 
  //   {'id':3,'name':'GHI','salary':3000}, 
  //   {'id':4,'name':'JKL','salary':4000}  
  // ]
 
  // bool=true;
}
