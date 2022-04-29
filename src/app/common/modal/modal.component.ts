import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Output() closeEvent:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.closeEvent.emit(true);
  }

  closeModal1(){
    console.log('hola');
  }
}
