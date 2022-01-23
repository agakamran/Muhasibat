import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhdelikComponent } from './ohdelik.component';

describe('OhdelikComponent', () => {
  let component: OhdelikComponent;
  let fixture: ComponentFixture<OhdelikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhdelikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhdelikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
