import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  placeholderText = '';

  @Input() set placeholder(placeholder:string){
    this.placeholderText = placeholder;
  }

  @Input() icon:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
