import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChartApprentissageNoteComponent } from './radar-chart-apprentissage-note.component';

describe('RadarChartApprentissageNoteComponent', () => {
  let component: RadarChartApprentissageNoteComponent;
  let fixture: ComponentFixture<RadarChartApprentissageNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarChartApprentissageNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadarChartApprentissageNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
