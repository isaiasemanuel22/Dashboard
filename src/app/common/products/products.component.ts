import { Component, OnInit, Input } from '@angular/core';
import { DataDashboardService } from 'src/app/resources/data-dashboard.service';
import { Product } from 'src/app/resources/models/product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  detail = false;
  height = '';
  heightTemp='';
  openedModal = false;
  @Input() set detailProducts(detail:boolean){
    this.detail = detail
  }

  @Input() set heightBody(height:string){
    this.height = height;
  }

  products:Product[] = [];
  constructor(private darhboard:DataDashboardService) {
    this.darhboard.getProducts().subscribe((response)=>{
      this.products = response;
    })
  }

  ngOnInit(): void {
  }

  openModal(){
    this.openedModal = true;
  }

  closeModal(){
    this.openedModal = false;
  }

}
