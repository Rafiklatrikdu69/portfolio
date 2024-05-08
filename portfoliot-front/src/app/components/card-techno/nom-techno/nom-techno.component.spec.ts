import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomTechnoComponent } from './nom-techno.component';

describe('NomTechnoComponent', () => {
  let component: NomTechnoComponent;
  let fixture: ComponentFixture<NomTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomTechnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
