import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavComponent } from './button-nav/button-nav.component';
import { LogoComponent } from './logo/logo.component';
import { PencilComponent } from './pencil/pencil.component';
import { LottieAnimationViewModule } from '../lottie-animation-view/lottie-animation-view.module';
import { IconsLordComponent } from './icons-lord/icons-lord.component';
import { BinComponent } from './bin/bin.component';
import { DocumentComponent } from './document/document.component';
import { BtnMoreComponent } from './btn-more/btn-more.component';
import { BtnCloseComponent } from './btn-close/btn-close.component';
import { ManStyleComponent } from './man-style/man-style.component';
import { SearchComponent } from './search/search.component';
import { BellComponent } from './bell/bell.component';
import { LoginGoogleComponent } from './login-google/login-google.component';


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
    ManStyleComponent,
    SearchComponent,
    BellComponent,
    LoginGoogleComponent,
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
    BtnCloseComponent,
    ManStyleComponent,
    SearchComponent,
    BellComponent,
    LoginGoogleComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SvgModule {
 }
