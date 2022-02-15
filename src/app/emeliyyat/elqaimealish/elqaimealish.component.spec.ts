import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElqaimealishComponent } from './elqaimealish.component';

describe('ElqaimealishComponent', () => {
  let component: ElqaimealishComponent;
  let fixture: ComponentFixture<ElqaimealishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElqaimealishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElqaimealishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
