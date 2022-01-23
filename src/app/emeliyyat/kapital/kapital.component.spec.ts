import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapitalComponent } from './kapital.component';

describe('KapitalComponent', () => {
  let component: KapitalComponent;
  let fixture: ComponentFixture<KapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
