import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxtarishComponent } from './axtarish.component';

describe('AxtarishComponent', () => {
  let component: AxtarishComponent;
  let fixture: ComponentFixture<AxtarishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxtarishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxtarishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
