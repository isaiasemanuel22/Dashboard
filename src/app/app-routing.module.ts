import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ClientsComponent } from './views/clients/clients.component';
import { ProvidersComponent } from './views/providers/providers.component';
import { SalesComponent } from './views/sales/sales.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'products' , component:ProductsComponent},
  {path:'clients' , component:ClientsComponent},
  {path:'providers' , component:ProvidersComponent},
  {path:'sales', component:SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
