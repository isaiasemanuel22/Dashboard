import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from './resources/common-service/common-services.service';
import { ActivatedRoute } from '@angular/router';

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
  login = false;
  constructor(
    private commonService:CommonServicesService,
    private route:ActivatedRoute
    ){
      let path = this.route.snapshot.url.join('/');
      if(path.includes('login')){
        this.login = true;
      }else{
        this.login = false;
      }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.commonService.notification$.subscribe((message)=>{
     this.message = message.message;
      this.notification = true;
      setTimeout(()=>{
        this.notification = false;
      },4000)
    })
  }
}
