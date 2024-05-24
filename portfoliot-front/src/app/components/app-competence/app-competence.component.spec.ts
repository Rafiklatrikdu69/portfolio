import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCompetenceComponent } from './app-competence.component';

describe('AppCompetenceComponent', () => {
  let component: AppCompetenceComponent;
  let fixture: ComponentFixture<AppCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCompetenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
