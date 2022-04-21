import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { BlockLayoutComponent } from './block-layout/block-layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AppContentComponent,
    AppLayoutComponent,
    BlockLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    AppContentComponent,
    AppLayoutComponent,
    BlockLayoutComponent
  ]
})
export class LayoutsModule { }
