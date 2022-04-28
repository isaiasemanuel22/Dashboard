import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  detail = false;
  height = '';
  heightTemp='';
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
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      },
      {
        id:1234,
        lastName:'Calfin',
        name:'Isaias Emanuel',
        email:'isaiasemanuelcalfin@gmail.com',
        tel:'2236745133'
      }
    ]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
