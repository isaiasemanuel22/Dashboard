import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { SvgModule } from '../svg/svg.module';
import { BtnSaveComponent } from './btn-save/btn-save.component';
import { InputSelectComponent } from './input-select/input-select.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    BtnSaveComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports:[
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    BtnSaveComponent,
    InputSelectComponent
  ]
})
export class FormsModule { }
