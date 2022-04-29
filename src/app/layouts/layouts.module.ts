import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { BlockLayoutComponent } from './block-layout/block-layout.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { SvgModule } from '../svg/svg.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AppContentComponent,
    AppLayoutComponent,
    BlockLayoutComponent
  ],
  imports: [
    CommonModule,
    LottieAnimationViewModule.forRoot(),
    SvgModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    AppContentComponent,
    AppLayoutComponent,
    BlockLayoutComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutsModule {
  constructor(){
    defineLordIconElement(lottie.loadAnimation)
  }
}
