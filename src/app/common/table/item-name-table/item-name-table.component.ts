import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item-name-table',
  templateUrl: './item-name-table.component.html',
  styleUrls: ['./item-name-table.component.scss'],
})
export class ItemNameTableComponent implements OnInit {
  ancho = '50px';

  id!:string;
  @Input() set width(ancho: string) {
    this.ancho = ancho;
  }

  action=false;

  @Input() set actions(action:boolean){
    this.action = action;
  }


  constructor() {
    const generateId = () => Math.random().toString(36).substr(2, 18);
    this.id = generateId();
  }

  ngAfterViewInit(): void {
    let element = document.getElementById(this.id);
    if (element != null) {
      element.style.width = this.ancho;
    } else {
      console.error('no se encontro elemento');
    }
  }

  ngOnInit(): void {}
}
