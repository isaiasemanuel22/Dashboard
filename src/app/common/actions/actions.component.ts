import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Output() actionClick:EventEmitter<string> = new EventEmitter();
  loader = true;
  constructor() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  ngOnInit(): void {
  }


  openModal(modalName:string){
    this.actionClick.emit(modalName)
  }


}
