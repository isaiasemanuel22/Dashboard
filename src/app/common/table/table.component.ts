import { Component, ContentChild, Input, OnInit, QueryList, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemTableComponent } from './item-table/item-table.component';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit  {

  height ='';

  @ContentChild(ItemTableComponent) listTable!:ItemTableComponent

  //@ViewChild(ItemTableComponent) listTable!:ItemTableComponent

  //@ViewChild('listTable') listTable!:any;
  dataChanges!:Subscription;
  @Input() set heightBody(height:string){
    this.height = height;
  }

  @Input() existTable:boolean = false;


  content = '';
  constructor(private cdref:ChangeDetectorRef , private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.updateStateItem();
    this.cdref.detectChanges();
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.updateStateItem();
  }

  updateStateItem(){
    //this.existTable = this.listTable.nativeElement && this.listTable.nativeElement.children.length > 0;
    this.existTable = this.listTable != null;

  }

  changes(){
    console.log('changes detected ! ! !')
  }
}
