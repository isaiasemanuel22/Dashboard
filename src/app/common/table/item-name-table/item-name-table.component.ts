import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { LoaderService } from 'src/app/resources/loader/loader.service';
import { TableServiceService } from '../../../resources/tableService/table-service.service';

@Component({
  selector: 'item-name-table',
  templateUrl: './item-name-table.component.html',
  styleUrls: ['./item-name-table.component.scss'],
})
export class ItemNameTableComponent implements OnInit, AfterViewInit {
  ancho: any;

  id!: string;
  @Input() set width(ancho: string) {
    this.ancho = ancho;
  }

  action = false;

  @Input() set actions(action: boolean) {
    this.action = action;
  }

  @Input() set key(key: string) {
    this.keyWord = key;
  }
  keyWord!: string;
  element: any;
  constructor(
    private tableService: TableServiceService,
    private loaderService: LoaderService
  ) {
    const generateId = () => Math.random().toString(36).substr(2, 18);
    this.id = generateId();
  }

  ngAfterViewInit(): void {
    this.element = document.getElementById(this.id);
    if (this.element != null) {
      //element.style.width = this.ancho;
      //this.ancho = this.element.clientWidth;
    }
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }

  ngOnInit(): void {}
}
