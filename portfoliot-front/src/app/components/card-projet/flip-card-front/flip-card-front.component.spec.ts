import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardFrontComponent } from './flip-card-front.component';

describe('FlipCardFrontComponent', () => {
  let component: FlipCardFrontComponent;
  let fixture: ComponentFixture<FlipCardFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipCardFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipCardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
