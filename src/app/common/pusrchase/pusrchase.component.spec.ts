import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PusrchaseComponent } from './pusrchase.component';

describe('PusrchaseComponent', () => {
  let component: PusrchaseComponent;
  let fixture: ComponentFixture<PusrchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PusrchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PusrchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
