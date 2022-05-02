import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataDashboardService } from '../../resources/data-dashboard.service';

@Component({
  selector: 'alert-delete',
  templateUrl: './alert-delete.component.html',
  styleUrls: ['./alert-delete.component.scss'],
})
export class AlertDeleteComponent implements OnInit {
  @Input() inputDelete: string = '';
  @Input() serviceDelete: string = '';
  @Output() finally:EventEmitter<boolean> = new EventEmitter();
  constructor(private dashboardService: DataDashboardService) {}

  ngOnInit(): void {}

  cancelDelete() {
    this.finally.emit(false);
  }

  continueDelete() {
    if (this.serviceDelete == 'product') {
      this.dashboardService.deleteProduct(this.inputDelete).then(()=>{
        this.finally.emit(true);
      });
    }
  }
}
