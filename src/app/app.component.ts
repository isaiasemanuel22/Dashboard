import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from './resources/common-service/common-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  notification=false;
  title = 'dashboard';
  name='Isaias Calfin'
  message= '';
  constructor(private commonService:CommonServicesService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.commonService.notification$.subscribe((message)=>{
      this.message = message;
      this.notification = true;
      setTimeout(()=>{
        this.notification = false;
      },4000)
    })
  }
}
