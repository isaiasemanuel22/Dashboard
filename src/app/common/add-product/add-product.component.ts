import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Provider } from 'src/app/resources/models/provider';
import { DataDashboardService } from '../../resources/data-dashboard.service';
import { Product } from '../../resources/models/product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProduct!: FormGroup;
  options: Provider[] = [];
  newProduct: Product = new Product();
  edit = false;
  @Input() set productEdit(product: Product | undefined) {
    if (product != undefined) {
      console.log(product);
      this.newProduct = product;
      this.edit = true;
    }
  }

  @Output() saveEvent: EventEmitter<Product | undefined> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private dashboardService: DataDashboardService
  ) {
    this.dashboardService.getProviders().subscribe((response) => {
      this.options = response;
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addProduct = this.formBuilder.group({
      idProduct: new FormControl(this.newProduct.idProduct, [Validators.required]),
      nameProvider: new FormControl(this.newProduct.provider, [
        Validators.required,
      ]),
      nameProduct: new FormControl(this.newProduct.name, [Validators.required]),
      stock: new FormControl(this.newProduct.stock),
      cost: new FormControl(this.newProduct.cost, [Validators.required]),
      price: new FormControl(this.newProduct.price),
      ingress: new FormControl(this.newProduct.ingress, [Validators.required]),
    });
  }

  saveProduct() {
    const newProductResponse = this.addProduct.value;
    if (!this.validateError(newProductResponse)) {
      const newProduct: any = {
        idProduct: newProductResponse.idProduct,
        provider: newProductResponse.nameProvider,
        name: newProductResponse.nameProduct,
        stock: newProductResponse.stock,
        cost: newProductResponse.cost,
        price: newProductResponse.price,
        ingress: newProductResponse.ingress,
      };

      this.saveEvent.emit(newProduct);
    }
  }



  validateError(value: any[]) {
    value = this.addProduct.value;
    for (let key in value) {
      if (this.addProduct.get(key)?.errors) {
        return true;
      }
    }
    return false;
  }
}
