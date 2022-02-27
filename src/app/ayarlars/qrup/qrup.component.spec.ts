import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrupComponent } from './qrup.component';

describe('QrupComponent', () => {
  let component: QrupComponent;
  let fixture: ComponentFixture<QrupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
