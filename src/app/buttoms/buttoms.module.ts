import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports:[
    NavComponent
  ]
})
export class ButtomsModule { }
