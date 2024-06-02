import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTechnosComponent } from './panel-technos.component';

describe('PanelTechnosComponent', () => {
  let component: PanelTechnosComponent;
  let fixture: ComponentFixture<PanelTechnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelTechnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelTechnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
