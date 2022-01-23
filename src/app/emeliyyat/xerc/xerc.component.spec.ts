import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XercComponent } from './xerc.component';

describe('XercComponent', () => {
  let component: XercComponent;
  let fixture: ComponentFixture<XercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XercComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
