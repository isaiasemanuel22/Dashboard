import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { BlockLayoutComponent } from './block-layout/block-layout.component';
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
  }
}
