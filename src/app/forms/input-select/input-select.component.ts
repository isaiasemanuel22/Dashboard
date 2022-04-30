import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
  placeholderText = '';
  options:any[] = [];
  title:string = '';
  valueObj:string = '';
  elements:any[] = [];
  @Input() formGroup!:FormGroup

  @Input() set placeholder(placeholder:string){
    this.placeholderText = placeholder;
  }
  @Input() icon:boolean = false;

  @Input() name!:string;

  @Input() set optionsArray(option:any[]){
    this.options = option;
  }

  @Input() set key(title:string){
    this.title = title;
  }


  @Input() set value(title:string){
    this.valueObj = title;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.valueOptions();
  }

  valueOptions(){
    if(typeof this.options[0] == 'string'){
      this.options.forEach((element)=>{
        this.elements.push({value:element});
      })
      this.title = 'value';
      this.value = 'value';
    }else{
      this.elements = this.options;
      console.log(this.elements);
    }
  }
}
