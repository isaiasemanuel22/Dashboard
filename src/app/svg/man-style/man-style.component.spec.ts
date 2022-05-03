import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManStyleComponent } from './man-style.component';

describe('ManStyleComponent', () => {
  let component: ManStyleComponent;
  let fixture: ComponentFixture<ManStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
