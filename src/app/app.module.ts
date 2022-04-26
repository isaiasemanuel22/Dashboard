import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LayoutsModule } from './layouts/layouts.module';
import { DashboardCommonModule } from './common/common.module';
import { ProductsComponent } from './views/products/products.component';
import { ClientsComponent } from './views/clients/clients.component';
import { ProvidersComponent } from './views/providers/providers.component';
import { SalesComponent } from './views/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ClientsComponent,
    ProvidersComponent,
    SalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    DashboardCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
