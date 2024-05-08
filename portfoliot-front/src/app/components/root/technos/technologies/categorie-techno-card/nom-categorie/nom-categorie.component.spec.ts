import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomCategorieComponent } from './nom-categorie.component';

describe('NomCategorieComponent', () => {
  let component: NomCategorieComponent;
  let fixture: ComponentFixture<NomCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
