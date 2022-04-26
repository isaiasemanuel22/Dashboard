import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      },
      {
        id:1234,
        nameProduct:'Overlock',
        disponible:6,
        precio:234,
        costo:134
      }
    ]
  }

  ngOnInit(): void {
  }


}
