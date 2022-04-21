import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-layout',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lottieConfig:any;

  @Input() name :string | undefined


  constructor() {
    this.lottieConfig = {
      path: "https://cdn.lordicon.com/lusqsztk.js",
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
   }

  ngOnInit(): void {
  }

}
