import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieAnimationViewDemoAppComponent } from './lottie-animation-view-demo-app.component';

describe('LottieAnimationViewDemoAppComponent', () => {
  let component: LottieAnimationViewDemoAppComponent;
  let fixture: ComponentFixture<LottieAnimationViewDemoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottieAnimationViewDemoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottieAnimationViewDemoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
