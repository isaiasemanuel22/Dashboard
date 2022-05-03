export class AbstractLottie {

  public lottieConfig!: Object;
  public anim: any;
  public animationSpeed: number = 1;
  idIconAnimate:any;

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
