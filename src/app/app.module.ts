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
import { LottieAnimationViewModule } from './lottie-animation-view/lottie-animation-view.module';
/*import { LottieAnimationViewModule } from 'lottie-angular2';*/
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { DataDashboardService } from './resources/data-dashboard.service';

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
    DashboardCommonModule,
    SvgModule,
    LottieAnimationViewModule.forRoot(),
    AngularFireModule.initializeApp(environment.firabase),
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
