import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNameTableComponent } from './item-name-table.component';

describe('ItemNameTableComponent', () => {
  let component: ItemNameTableComponent;
  let fixture: ComponentFixture<ItemNameTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNameTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
