import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApprentissageComponent } from './card-apprentissage.component';

describe('CardApprentissageComponent', () => {
  let component: CardApprentissageComponent;
  let fixture: ComponentFixture<CardApprentissageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardApprentissageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardApprentissageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
