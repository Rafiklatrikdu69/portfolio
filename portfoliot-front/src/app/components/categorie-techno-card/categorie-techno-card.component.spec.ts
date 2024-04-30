import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieTechnoCardComponent } from './categorie-techno-card.component';

describe('CategorieTechnoCardComponent', () => {
  let component: CategorieTechnoCardComponent;
  let fixture: ComponentFixture<CategorieTechnoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieTechnoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieTechnoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
