import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmeliylistComponent } from './emeliylist.component';

describe('EmeliylistComponent', () => {
  let component: EmeliylistComponent;
  let fixture: ComponentFixture<EmeliylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmeliylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmeliylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
