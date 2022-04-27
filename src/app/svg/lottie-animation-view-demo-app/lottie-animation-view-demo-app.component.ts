import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lottie-animation-view-demo-app',
    template: '' ,
})
export class LottieAnimationViewDemoAppComponent implements AfterViewInit {

  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;

  constructor() {
      this.lottieConfig = {
          path: 'assets/pinjump.json',
          autoplay: true,
          loop: true
      };
  }


  ngAfterViewInit(): void {

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
