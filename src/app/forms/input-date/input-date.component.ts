import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

  placeholderText = '';
  nameControl = '';

  @Input() set placeholder(placeholder: string) {
    this.placeholderText = placeholder;
  }

  @Input() formGroup!: FormGroup;

  @Input() icon: boolean = false;

  @Input() set name(nameForm: string) {
    this.nameControl = nameForm;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
