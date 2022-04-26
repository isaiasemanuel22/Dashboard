import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {

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
