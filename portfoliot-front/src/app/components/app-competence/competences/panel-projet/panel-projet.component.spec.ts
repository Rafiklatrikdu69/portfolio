import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProjetComponent } from './panel-projet.component';

describe('PanelProjetComponent', () => {
  let component: PanelProjetComponent;
  let fixture: ComponentFixture<PanelProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
