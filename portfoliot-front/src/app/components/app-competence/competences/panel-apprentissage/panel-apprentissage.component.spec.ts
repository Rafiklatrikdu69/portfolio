import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelApprentissageComponent } from './panel-apprentissage.component';

describe('PanelApprentissageComponent', () => {
  let component: PanelApprentissageComponent;
  let fixture: ComponentFixture<PanelApprentissageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelApprentissageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelApprentissageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
