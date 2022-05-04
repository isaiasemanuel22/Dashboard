import { Component, OnInit } from '@angular/core';
import { AbstractLottie } from '../abstract-lottie';

@Component({
  selector: 'pencil',
  templateUrl: './pencil.component.html',
  styleUrls: ['./pencil.component.scss']
})
export class PencilComponent extends AbstractLottie implements OnInit {

  constructor() {
    super();
      this.lottieConfig = {
          path: 'assets/pencil-edit.json',
          autoplay: false,
          loop: false
      };

  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
