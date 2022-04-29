import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-close',
  templateUrl: './btn-close.component.html',
  styleUrls: ['./btn-close.component.scss']
})
export class BtnCloseComponent implements OnInit {

  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;
  idIconAnimate:any;
  constructor() {
      this.lottieConfig = {
          path: 'assets/btn-close.json',
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
