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

  getProducts():Observable<any[]>{
    return this.firestore.collection('products').snapshotChanges();
  }

  addProduct(newProduct:any){
   return this.firestore.collection('products').add(newProduct);
  }

  updateProduct(id:string , data:any){
    return this.firestore.collection('products').doc(id).update(data);
  }

  deleteProduct(id:string){
    return this.firestore.collection('products').doc(id).delete();
  }

  getProviders():Observable<Provider[]>{
    return of(this.providers);
  }
}
