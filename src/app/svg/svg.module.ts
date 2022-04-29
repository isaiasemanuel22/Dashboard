import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavComponent } from './button-nav/button-nav.component';
import { LogoComponent } from './logo/logo.component';
import { PencilComponent } from './pencil/pencil.component';
import { LottieAnimationViewModule } from '../lottie-animation-view/lottie-animation-view.module';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { IconsLordComponent } from './icons-lord/icons-lord.component';
import { BinComponent } from './bin/bin.component';
import { DocumentComponent } from './document/document.component';
import { BtnMoreComponent } from './btn-more/btn-more.component';
import { BtnCloseComponent } from './btn-close/btn-close.component';


@NgModule({
  declarations: [
    ButtonNavComponent,
    LogoComponent,
    PencilComponent,
    IconsLordComponent,
    BinComponent,
    DocumentComponent,
    BtnMoreComponent,
    BtnCloseComponent,
  ],
  imports: [
    CommonModule,
    LottieAnimationViewModule.forRoot(),
  ],
  exports:[
    ButtonNavComponent,
    LogoComponent,
    PencilComponent,
    IconsLordComponent,
    BinComponent,
    DocumentComponent,
    BtnMoreComponent,
    BtnCloseComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SvgModule {
  constructor(){
    defineLordIconElement(lottie.loadAnimation)
  }
 }
