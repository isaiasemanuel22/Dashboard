import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

  }

}
