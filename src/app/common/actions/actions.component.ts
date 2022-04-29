import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Output() actionClick:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  openModalProductos(){
    this.actionClick.emit('products')
  }

}
