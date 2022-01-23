import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VergiComponent } from './vergi.component';

describe('VergiComponent', () => {
  let component: VergiComponent;
  let fixture: ComponentFixture<VergiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VergiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VergiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
