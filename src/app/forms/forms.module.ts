import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { SvgModule } from '../svg/svg.module';
import { BtnSaveComponent } from './btn-save/btn-save.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    BtnSaveComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports:[
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    BtnSaveComponent
  ]
})
export class FormsModule { }
