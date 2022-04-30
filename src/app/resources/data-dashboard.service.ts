import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product';
import { Provider } from './models/provider';

@Injectable({
  providedIn: 'root'
})
export class DataDashboardService {

  constructor() { }
  private products:Product[] = [
    {
      id:'1234',
      name:'Porta vasos',
      cost:'123',
      provider:'Arturo Vasos',
      ingress:'11/05/202',
      stock:'10',
      price:'234'
    }
  ];

  private providers:Provider[] = [
    {
      name:'Arturo Vasos',
      tel:'223678876',
      email:'arturoVasos@Arturo.com',
      addres:'Santa Paula 345'
    }
  ]

  getProducts():Observable<Product[]>{
    return of(this.products);
  }

  addProduct(newProduct:Product){
    this.products.push(newProduct);
  }

  getProviders():Observable<Provider[]>{
    return of(this.providers);
  }
}
