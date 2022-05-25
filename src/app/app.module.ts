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
import { SvgModule } from './svg/svg.module';
/*import { LottieAnimationViewModule } from 'lottie-angular2';*/
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ClientsComponent,
    ProvidersComponent,
    SalesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    DashboardCommonModule,
    SvgModule,
    AngularFireModule.initializeApp(environment.firabase),
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
