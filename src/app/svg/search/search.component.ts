import { Component, OnInit } from '@angular/core';
import { AbstractLottie } from '../abstract-lottie';

@Component({
  selector: 'svg-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends AbstractLottie implements OnInit {

  constructor() {
    super();
    this.lottieConfig = {
      path: 'assets/search.json',
      autoplay: false,
      loop: false
  };
  }

  ngOnInit(): void {
  }

}
