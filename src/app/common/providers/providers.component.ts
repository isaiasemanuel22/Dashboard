import { Component, Input, OnInit } from '@angular/core';
import { Provider } from 'src/app/resources/models/provider/provider';

@Component({
  selector: 'providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  detail = false;
  height = '';
  heightTemp='';
  openedModal = true;
  providerEdit:Provider | undefined;
  @Input() set detailProducts(detail:boolean){
    this.detail = detail
  }

  @Input() set heightBody(height:string){
    this.height = height;
  }

  mockProducts:any[] = [];
  constructor() {
    this.mockProducts = [
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Artiuculo SA',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        addres:'Diagonal 2334 - Mar del plata - Buenos Aires',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      }
    ]
  }
  ngOnInit(): void {

  }

  closeModal(){
    this.openedModal = false;
  }

  add_update(response:any){

  }
}
