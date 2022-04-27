import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit {

  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;
  idIconAnimate:any;
  constructor() {
      this.lottieConfig = {
          path: 'assets/bin.json',
          autoplay: false,
          loop: false
      };
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }


  handleAnimation(anim: any) {
      this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: any) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }

}
