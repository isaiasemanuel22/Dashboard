import { Component, OnInit, Input } from '@angular/core';

import { DataDashboardService } from 'src/app/resources/data-dashboard.service';


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
  productEdit: any | undefined;
  modalDelete = false;
  productDelete!: string;
  @Input() set detailProducts(detail: boolean) {
    this.detail = detail;
  }

  @Input() set heightBody(height: string) {
    this.height = height;
  }

  products: any[] = [];
  constructor(private darhboard: DataDashboardService) {
    this.darhboard.getProducts().subscribe((lisProducts) => {
      this.products = [];
      lisProducts.forEach((product: any) => {
        this.products.push({
          id: product.payload.doc.id,
          ...product.payload.doc.data(),
        });
      });
    });
  }

  ngOnInit(): void {}

  openModal() {
    this.openedModal = true;
  }

  closeModal() {
    this.openedModal = false;
    this.productEdit = undefined;
    this.modalDelete = false;
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
    this.darhboard
    .addProduct(newProduct)
    .then(() => {

    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateProductService(updateProduct:any){
    console.log(this.productEdit.id);
    this.darhboard.updateProduct(this.productEdit.id , updateProduct).then(()=>{
    })
  }


}
