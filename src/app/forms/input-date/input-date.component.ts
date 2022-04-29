import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

  placeholderText = '';

  @Input() set placeholder(placeholder:string){
    this.placeholderText = placeholder;
  }

  @Input() icon:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
