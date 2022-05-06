import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataDashboardService } from '../../resources/dashboardDataService/data-dashboard.service';

@Component({
  selector: 'alert-delete',
  templateUrl: './alert-delete.component.html',
  styleUrls: ['./alert-delete.component.scss'],
})
export class AlertDeleteComponent implements OnInit {

  @Output() finally:EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  cancelDelete() {
    this.finally.emit(false);
  }

  continueDelete() {
    this.finally.emit(true);
  }


}
