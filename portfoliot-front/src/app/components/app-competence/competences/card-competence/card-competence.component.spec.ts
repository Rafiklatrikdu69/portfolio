import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompetenceComponent } from './card-competence.component';

describe('CardCompetenceComponent', () => {
  let component: CardCompetenceComponent;
  let fixture: ComponentFixture<CardCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCompetenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
