import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesablashmaComponent } from './hesablashma.component';

describe('HesablashmaComponent', () => {
  let component: HesablashmaComponent;
  let fixture: ComponentFixture<HesablashmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HesablashmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HesablashmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
