import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
  placeholderText = '';

  @Input() set placeholder(placeholder:string){
    this.placeholderText = placeholder;
  }

  @Input() icon:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
