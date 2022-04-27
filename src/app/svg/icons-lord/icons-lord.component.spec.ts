import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLordComponent } from './icons-lord.component';

describe('IconsLordComponent', () => {
  let component: IconsLordComponent;
  let fixture: ComponentFixture<IconsLordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsLordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
