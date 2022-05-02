import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'buttom-action',
  templateUrl: './buttom-action.component.html',
  styleUrls: ['./buttom-action.component.scss']
})
export class ButtomActionComponent implements OnInit {

  @Input() secondary:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
