import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icons-lord',
  templateUrl: './icons-lord.component.html',
  styleUrls: ['./icons-lord.component.scss']
})
export class IconsLordComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  public animationSpeed: number = 1;

  constructor() {
      this.lottieConfig = {
          path: 'assets/ping-pong.json',
          renderer: 'canvas',
          autoplay: true,
          loop: true
      };
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
