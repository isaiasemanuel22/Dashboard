import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  height ='';

  @Input() set heightBody(height:string){
    console.log(height);
    this.height = height;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
