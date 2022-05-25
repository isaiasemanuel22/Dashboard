import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  @Input() logued:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
