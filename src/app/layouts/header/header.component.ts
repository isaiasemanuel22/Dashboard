import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../resources/authService/auth.service';

@Component({
  selector: 'header-layout',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lottieConfig:any;

  @Input() name :string | undefined

  userLoggued:any;
  constructor( private auth:AuthService ) {
    this.lottieConfig = {
      path: "https://cdn.lordicon.com/lusqsztk.js",
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
   }

  ngOnInit(): void {
    this.auth.getUserLogued().subscribe(response => this.userLoggued = response);
  }

}
