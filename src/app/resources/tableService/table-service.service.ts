import { Injectable } from '@angular/core';

export class HeaderName {
  name!: string;
  referenceValue!: string;
  priority!: number;
  detail?:boolean
}

@Injectable({
  providedIn: 'root',
})
export class TableService {
  tableMockResponse = require('../mocks/headerTableProducts.json');
  tableMockResponsePurchase = require('../mocks/headerTablePurchase.json');
  headerTableName: HeaderName[] = this.tableMockResponse;


  getHeaderTablePurchase(){
    return this.tableMockResponsePurchase
  }

  getHeaderTableProducts(){
    return this.headerTableName;
  }
}
