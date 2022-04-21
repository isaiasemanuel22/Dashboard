import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dashboard-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  titleButton!:string;
  selected:boolean = false

  @Input() set title(title:string){
    this.titleButton = title
  }

  @Input() set select(selected:boolean){
    this.selected = selected
  }

  @Output() focus = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit(): void {
  }

  activeClass(){
    this.selected = true;
    this.focus.emit(true);
  }
}
