import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieAnimationViewComponent } from './lottie-animation-view/lottie-animation-view.component';

@NgModule({
  declarations: [
    LottieAnimationViewComponent
  ],
  imports: [CommonModule],
  exports: [LottieAnimationViewComponent]
})
export class LottieAnimationViewModule {

  static forRoot(): ModuleWithProviders<LottieAnimationViewModule> {
    return {
      ngModule: LottieAnimationViewModule
    };
  }

}
