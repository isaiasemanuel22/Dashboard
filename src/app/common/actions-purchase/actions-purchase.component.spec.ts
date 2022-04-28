import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPurchaseComponent } from './actions-purchase.component';

describe('ActionsPurchaseComponent', () => {
  let component: ActionsPurchaseComponent;
  let fixture: ComponentFixture<ActionsPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
