import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSortComponent } from './nested-sort.component';

describe('NestedSortComponent', () => {
  let component: NestedSortComponent;
  let fixture: ComponentFixture<NestedSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
