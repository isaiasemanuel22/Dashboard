import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomActionComponent } from './buttom-action.component';

describe('ButtomActionComponent', () => {
  let component: ButtomActionComponent;
  let fixture: ComponentFixture<ButtomActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
