import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  dashboard:boolean = true;
  productos!:boolean;
  clientes!:boolean;
  proveedores!:boolean;
  ventas!:boolean;

  constructor( private route: Router) { }

  ngOnInit(): void {
    this.selectPage();
  }

  selectPage(){
    let ruta =  this.getUrl();
   switch(ruta){
      case 'products':{
        this.productosSelected();
        break;
      }
      case 'clients':{
        this.clientesSelected();
        break;
      }
      case 'providers':{
        this.proveedoresSelected();
        break;
      }
      case 'sales':{
        this.ventasSelected();
        break;
      }
      default:{
        this.dashboardSelected();
        break;
      }
    }
  }

  getUrl():string{
    let ruta = window.location.href;
    if(ruta.includes('home')){
      return 'home';
    }

    if(ruta.includes('products')){
      return 'products';
    }

    if(ruta.includes('clients')){
      return 'clients';
    }

    return '';
  }


  dashboardSelected(){
    this.dashboard = true;
    this.productos = false;
    this.clientes = false;
    this.proveedores = false;
    this.ventas = false;
  }

  productosSelected(){
    this.dashboard = false;
    this.productos = true;
    this.clientes = false;
    this.proveedores = false;
    this.ventas = false;
  }

  clientesSelected(){
    this.dashboard = false;
    this.productos = false;
    this.clientes = true;
    this.proveedores = false;
    this.ventas = false;
  }

  proveedoresSelected(){
    this.dashboard = false;
    this.productos = false;
    this.clientes = false;
    this.proveedores = true;
    this.ventas = false;
  }

  ventasSelected(){
    this.dashboard = false;
    this.productos = false;
    this.clientes = false;
    this.proveedores = false;
    this.ventas = true;
  }

  routing(param:string){
     this.route.navigate([param])
  }

}
