import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlishComponent } from './alish.component';

describe('AlishComponent', () => {
  let component: AlishComponent;
  let fixture: ComponentFixture<AlishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
