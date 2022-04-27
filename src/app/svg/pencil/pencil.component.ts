import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from '../../resources/common-services.service';

@Component({
  selector: 'pencil',
  templateUrl: './pencil.component.html',
  styleUrls: ['./pencil.component.scss']
})
export class PencilComponent implements OnInit {


  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;
  idIconAnimate:any;
  constructor(private commonService:CommonServicesService) {
      this.lottieConfig = {
          path: 'assets/pencil-edit.json',
          autoplay: false,
          loop: false
      };

      this.idIconAnimate = this.commonService.generateId();


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
