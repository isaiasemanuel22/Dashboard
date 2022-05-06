import { Component, OnInit, Input } from '@angular/core';

import { DataDashboardService } from 'src/app/resources/dashboardDataService/data-dashboard.service';
import { CommonServicesService } from '../../resources/common-service/common-services.service';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {
  detail = false;
  height = '';
  heightTemp = '';
  openedModal = false;
  productEdit: any;
  modalDelete = false;
  productDelete!: string;
  notificationTab = false;
  mesagge = '';

  @Input() set detailProducts(detail: boolean) {
    this.detail = detail;
  }

  @Input() set heightBody(height: string) {
    this.height = height;
  }
  loader = true;
  products: any[] = [];
  constructor(
    private dashboard: DataDashboardService,
    private commonService: CommonServicesService) {


    this.dashboard.getProducts().subscribe((lisProducts) => {
      this.loader = true;
      this.products = [];
      lisProducts.forEach((product: any) => {
        this.products.push({
          id: product.payload.doc.id,
          ...product.payload.doc.data(),
        });
      });
      setTimeout(()=>{
        this.loader = false;
      },2000)
    });
  }

  ngOnInit(): void {}

  openModal() {
    this.openedModal = true;
  }

  closeModal() {
    this.openedModal = false;
  }

  editProdut(product: any) {
    this.productEdit = product;
    this.openModal();
  }

  deleteProduct(idProduct:string){
    this.productDelete = idProduct;
    this.modalDelete = true;
  }

  add_update(response:any){
    this.closeModal();
    if(this.productEdit == undefined){
      this.addProductService(response);
    }else{
      this.updateProductService(response);
    }
  }

  addProductService(newProduct:any){
    this.dashboard
    .addProduct(newProduct)
    .then(() => {
      this.mesagge = 'Producto agregado correctamente';
      this.notificationTab = true
    })
    .catch(() => {
      this.mesagge = 'Producto agregado correctamente';
      this.notificationTab = true
    });
  }

  updateProductService(updateProduct:any){
    this.dashboard.updateProduct(this.productEdit.id , updateProduct).then(()=>{
      this.productEdit = undefined;
      this.mesagge = 'Producto actualizado correctamente';
      this.commonService.addNotification(this.mesagge);
    }).catch(()=>{
      this.commonService.addNotification('No se ha eliminado el producto');
    })
  }


  deleteProductEvent(response:any){
    this.modalDelete = false;
    if(response){
      this.dashboard.deleteProduct(this.productDelete).then(()=>{
        this.productDelete = '';
        this.commonService.addNotification('Producto eliminado correctamente');
      }).catch(()=>{
        this.commonService.addNotification('No se ha eliminado el producto');
      })
    }else{
      this.commonService.addNotification('No se ha eliminado el producto');
    }
  }


}
