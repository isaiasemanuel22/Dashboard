import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavComponent } from './button-nav/button-nav.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    ButtonNavComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonNavComponent,
    LogoComponent
  ]
})
export class SvgModule { }
