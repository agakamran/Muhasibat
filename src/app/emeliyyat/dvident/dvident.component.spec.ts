import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvidentComponent } from './dvident.component';

describe('DvidentComponent', () => {
  let component: DvidentComponent;
  let fixture: ComponentFixture<DvidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
