import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name='Isaias Calfin'
  constructor() { }
  modalProducts = false;
  modalClient = false;
  ngOnInit(): void {
  }

  openModal(modal:string){
    if(modal == 'products'){
     this.modalProducts = true;
    }
    if(modal == 'clients'){
      this.modalClient = true;
    }
  }

  closeModalProductos(){
    this.modalProducts = false;
  }

  closeModalClient(){
    this.modalClient = false;
  }
}
