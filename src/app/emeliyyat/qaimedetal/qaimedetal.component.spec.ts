import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaimedetalComponent } from './qaimedetal.component';

describe('QaimedetalComponent', () => {
  let component: QaimedetalComponent;
  let fixture: ComponentFixture<QaimedetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaimedetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaimedetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
