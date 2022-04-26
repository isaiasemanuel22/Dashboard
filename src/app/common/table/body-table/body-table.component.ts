import { Component, Input, OnInit } from '@angular/core';
import { CommonServicesService } from '../../../resources/common-services.service';

@Component({
  selector: 'body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.scss'],
})
export class BodyTableComponent implements OnInit {
  heightBody = '';
  idElement!: string;
  @Input() set height(alto: string) {
    this.heightBody = alto;
  }
  constructor(private serviceCommon: CommonServicesService) {
    this.idElement = this.serviceCommon.generateId();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.heightBody != '') {
      let element = document.getElementById(this.idElement);
      if (element) {
        element.style.maxHeight = this.heightBody;
      }
    }
  }
}
