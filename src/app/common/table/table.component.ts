import {
  Component,
  ContentChild,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  ContentChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemNameTableComponent } from './item-name-table/item-name-table.component';
import { ItemTableComponent } from './item-table/item-table.component';

@Component({
  selector: 'dash-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  height = '';

  @Input() set heightBody(height: string) {
    this.height = height;
  }

  @Input() existTable: boolean = true;
  @Input() set titles(titles: string[]) {
    console.log(titles);
    this.titlesTable = titles;
  }
  @Input() set data(data: any[]) {
    console.log(data);
    this.dataTable = data;
    this.load = true;
  }
  content = '';
  load = false;
  titlesTable: string[] = [];
  dataTable: any[] = [];
  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let element = document.getElementById('body-table')!;
    element.style.height = this.height;
  }
}
