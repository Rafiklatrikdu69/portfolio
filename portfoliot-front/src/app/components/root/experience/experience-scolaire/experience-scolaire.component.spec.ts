import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceScolaireComponent } from './experience-scolaire.component';

describe('ExperienceScolaireComponent', () => {
  let component: ExperienceScolaireComponent;
  let fixture: ComponentFixture<ExperienceScolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceScolaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
