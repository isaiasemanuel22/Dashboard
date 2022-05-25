import { Component, Input, OnInit } from '@angular/core';
import { TableService } from '../../resources/tableService/table-service.service';

@Component({
  selector: 'pusrchase',
  templateUrl: './pusrchase.component.html',
  styleUrls: ['./pusrchase.component.scss']
})
export class PusrchaseComponent implements OnInit {

  mockPurchase!:any[];
  height = '';
  detail = false;
  @Input() set heightBody(height:string){
    this.height = height;
  }

  @Input() set detailPruchase(detail:boolean){
   this.detail = detail;
  }
  tableKey:any[] = []
  constructor(private tableService:TableService) {
  this.tableKey = tableService.getHeaderTablePurchase();
    this.mockPurchase = [
      {
        order:1234,
        clientName:'Adolfo Ruffino',
        totalSend:1245
      },
      {
        order:1234,
        clientName:'Adolfo Ruffino',
        totalSend:1245
      },
      {
        order:1234,
        clientName:'Adolfo Ruffino',
        totalSend:1245
      },
      {
        order:1234,
        clientName:'Adolfo Ruffino',
        totalSend:1245
      },
      {
        order:1234,
        clientName:'Adolfo Ruffino',
        totalSend:1245
      }
    ]
  }
  ngOnInit(): void {
  }

}
