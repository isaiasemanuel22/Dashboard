import { style } from '@angular/animations';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { DataDashboardService } from 'src/app/resources/dashboardDataService/data-dashboard.service';
import { CommonServicesService } from '../../resources/common-service/common-services.service';
import { Loader, LoaderService } from '../../resources/loader/loader.service';
import { TableService } from '../../resources/tableService/table-service.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
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
  loader: Loader | undefined = new Loader();
  products: any[] = [];

  tableItems: number = 0;
  tableKey: any[] = [];
  styleColum: string = '';
  service = 'products';

  titles = ["colum 1" , "colum 2" ,"colum 3"];
  constructor(
    private dashboard: DataDashboardService,
    private commonService: CommonServicesService,
    private loaderService: LoaderService,
    private tableService:TableService
    ) {


    this.loaderService.loader$.subscribe((loader) => {
      this.loader = loader.find((load) => load.nameService == this.service);
    });

    this.dashboard.getFirebase(this.service).subscribe((response: any[]) => {
      this.products = response;
    });

    this.tableKey = tableService.getHeaderTableProducts();

  }
  ngAfterViewInit(): void {
    //medir ancho de los items;
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

  deleteProduct(idProduct: string | undefined) {
    if (idProduct) {
      this.productDelete = idProduct;
      this.modalDelete = true;
    }
  }

  add_update(response: any) {
    this.closeModal();
    if (this.productEdit == undefined) {
      this.addProductService(response);
    } else {
      this.updateProductService(response);
      this.productEdit = undefined;
    }
  }

  addProductService(newProduct: any) {
    this.dashboard.addFirebase(
      this.service,
      newProduct,
      'Producto agregado correctamente',
      'Producto agregado correctamente'
    );
  }

  deleteProductEvent(response: any) {
    this.modalDelete = false;
    if (response) {
      this.dashboard.deleteFirebase(
        this.service,
        this.productDelete,
        'Producto eliminado correctamente',
        'El Producto no se ha podido eliminar'
      );
    }
  }

  updateProductService(updateProduct: any) {
    this.dashboard.updateFirebase(
      this.service,
      updateProduct,
      'El producto se ha podido actualizar',
      'El producto no se ha podido actualizar'
    );


  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
