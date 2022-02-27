import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnbarComponent } from './anbar.component';

describe('AnbarComponent', () => {
  let component: AnbarComponent;
  let fixture: ComponentFixture<AnbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
