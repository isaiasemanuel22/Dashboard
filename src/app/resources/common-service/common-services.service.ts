import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor() { }

  public notification = new Subject<{message:string , typeMessage:boolean}>();

  public notification$ = this.notification.asObservable();



  generateId(){
    return Math.random().toString(36).substr(2, 18);
  }

  addNotification(notificationMessage:string, typeMessage:boolean){
    this.notification.next({message:notificationMessage,typeMessage:typeMessage});
  }




}
