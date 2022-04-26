import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator/navigator.component';
import { ButtomsModule } from '../buttoms/buttoms.module';
import { LogoComponent } from './logo/logo.component';
import { SvgModule } from '../svg/svg.module';
import { ActionsComponent } from './actions/actions.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { HeaderTableComponent } from './table/header-table/header-table.component';
import { BodyTableComponent } from './table/body-table/body-table.component';
import { ItemTableComponent } from './table/item-table/item-table.component';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ItemNameTableComponent } from './table/item-name-table/item-name-table.component';
import { PusrchaseComponent } from './pusrchase/pusrchase.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NavigatorComponent,
    LogoComponent,
    ActionsComponent,
    ProductsComponent,
    SearchComponent,
    TableComponent,
    HeaderTableComponent,
    BodyTableComponent,
    ItemTableComponent,
    ItemNameTableComponent,
    PusrchaseComponent
  ],
  imports: [
    ButtomsModule,
    SvgModule,
    LayoutsModule,
    LottieAnimationViewModule.forRoot(),
    BrowserModule
  ],
  exports:[
    NavigatorComponent,
    LogoComponent,
    ActionsComponent,
    ProductsComponent,
    PusrchaseComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardCommonModule {
  constructor(){
    defineLordIconElement(lottie.loadAnimation)
  }
 }
