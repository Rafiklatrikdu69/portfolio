import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTechnoComponent } from './card-techno.component';

describe('CardTechnoComponent', () => {
  let component: CardTechnoComponent;
  let fixture: ComponentFixture<CardTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTechnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
