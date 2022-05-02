import { Component, forwardRef, Host, Inject, OnInit } from '@angular/core';
import { TableComponent } from '../table.component';

@Component({
  selector: 'item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  constructor(@Host() @Inject(forwardRef(()=> TableComponent)) private table:any) { }

  ngOnInit(): void {
  }

}
