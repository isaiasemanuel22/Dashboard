import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/app/resources/common-service/common-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  notification = false;
  title = 'dashboard';
  name = 'Isaias Calfin';
  message = '';
  constructor(private commonService: CommonServicesService) {}

  ngOnInit(): void {

    this.commonService.notification$.subscribe((message) => {
      this.message = message.message;
      this.notification = true;
      setTimeout(() => {
        this.notification = false;
      }, 4000);
    });
  }


}
