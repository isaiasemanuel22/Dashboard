import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SvgModule } from '../svg/svg.module';
import { ButtomActionComponent } from './buttom-action/buttom-action.component';



@NgModule({
  declarations: [
    NavComponent,
    ButtomActionComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports:[
    NavComponent,
    ButtomActionComponent
  ]
})
export class ButtomsModule { }
