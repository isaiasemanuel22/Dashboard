import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class ItemTable{
  keyItemTable!:string;
  widht?:Subject<number>;
  constructor(){
    this.widht = new Subject<number>()
  }
}

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  private itemsTable:ItemTable[] = [];
  constructor() { }

  getItemsWidht(key:string){
    console.log(key)
    let keyWidht = this.getItem(key);
    if(keyWidht == undefined){
      keyWidht = new ItemTable();
      keyWidht.keyItemTable = key;
      keyWidht.widht!.next(0)
      console.log(keyWidht);
    }
    console.log(keyWidht);
    return keyWidht.widht!.asObservable();
  }

  upadateKey(key:string , widht:number){
    let keyWidht = this.getItem(key);
    if(keyWidht!= undefined){
      keyWidht.widht!.next(widht);
    }
  }


  getItem(key:string){
    return this.itemsTable.find((item)=>item.keyItemTable == key);
  }




}
