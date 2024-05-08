import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionProjetComponent } from './description-projet.component';

describe('DescriptionProjetComponent', () => {
  let component: DescriptionProjetComponent;
  let fixture: ComponentFixture<DescriptionProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
