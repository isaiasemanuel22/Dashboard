import { Component, OnInit } from '@angular/core';
import { AbstractLottie } from '../abstract-lottie';

@Component({
  selector: 'bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.scss']
})
export class BellComponent extends AbstractLottie implements OnInit {

  constructor() {
    super();
    this.lottieConfig = {
      path: 'assets/bell.json',
      autoplay: false,
      loop: false
  };
  }

  ngOnInit(): void {
  }

}
