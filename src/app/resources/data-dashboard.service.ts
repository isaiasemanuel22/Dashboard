import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product';
import { Provider } from './models/provider';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataDashboardService {


  constructor(private firestore:AngularFirestore ) { }
  products$!:Observable<any[]>;

  private providers:Provider[] = [
    {
      name:'Arturo Vasos',
      tel:'223678876',
      email:'arturoVasos@Arturo.com',
      addres:'Santa Paula 345'
    }
  ]

  getProducts():Observable<Product[]>{
    this.products$ = this.firestore.collection('products').valueChanges();
    return this.products$;
  }

  addProduct(newProduct:any){
   return this.firestore.collection('products').add(newProduct);
  }

  getProviders():Observable<Provider[]>{
    return of(this.providers);
  }
}
