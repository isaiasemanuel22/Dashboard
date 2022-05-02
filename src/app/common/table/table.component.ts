import { Component, ContentChild, Input, OnInit, QueryList, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ItemTableComponent } from './item-table/item-table.component';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit  {

  height ='';

  //@ContentChild(ItemTableComponent) listTable!:ItemTableComponent

  @ViewChild(ItemTableComponent) listTable!:ItemTableComponent


  @Input() set heightBody(height:string){
    this.height = height;
  }
  existTable = true;
  content = '';
  constructor(private cdref:ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.ItemTableComponent);
    this.updateStateItem();
    console.log(this.cdref.detectChanges());
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.updateStateItem();
    console.log(this.cdref.detectChanges());
  }

  ngOnInit(): void {
    console.log(this.cdref.detectChanges());
  }

  updateStateItem(){
    this.existTable = this.listTable != null;
    console.log(this.existTable);
  }

}
