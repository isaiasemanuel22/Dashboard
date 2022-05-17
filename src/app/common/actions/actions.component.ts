import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Output() actionClick:EventEmitter<string> = new EventEmitter();
  loader = false;
  constructor() {
  }
  ngOnInit(): void {
  }

  openModal(modalName:string){
    this.actionClick.emit(modalName)
  }


}
