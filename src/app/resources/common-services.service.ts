import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor() { }

  generateId(){
    return Math.random().toString(36).substr(2, 18);
  }

}
