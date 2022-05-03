import { Component, OnInit } from '@angular/core';
import { AbstractLottie } from '../abstract-lottie';

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent extends AbstractLottie implements OnInit {

  constructor() {
    super();
      this.lottieConfig = {
          path: 'assets/documents.json',
          autoplay: false,
          loop: false
      };
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
  }

}

