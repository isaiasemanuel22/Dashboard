import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name='Isaias Calfin'
  constructor() { }

  ngOnInit(): void {
  }

}
