import { Component, OnInit } from '@angular/core';
import { AbstractLottie } from '../abstract-lottie';

@Component({
  selector: 'man-style',
  templateUrl: './man-style.component.html',
  styleUrls: ['./man-style.component.scss']
})
export class ManStyleComponent extends AbstractLottie implements OnInit {


  constructor() {
    super();
      this.lottieConfig = {
          path: 'assets/man-style.json',
          autoplay: false,
          loop: false
      };
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }


}
