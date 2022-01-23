import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelirComponent } from './gelir.component';

describe('GelirComponent', () => {
  let component: GelirComponent;
  let fixture: ComponentFixture<GelirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GelirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GelirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
