import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaimelersComponent } from './qaimelers.component';

describe('QaimelersComponent', () => {
  let component: QaimelersComponent;
  let fixture: ComponentFixture<QaimelersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaimelersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaimelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
