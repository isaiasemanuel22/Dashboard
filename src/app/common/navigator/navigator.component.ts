import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
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
