import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTechnoComponent } from './image-techno.component';

describe('ImageTechnoComponent', () => {
  let component: ImageTechnoComponent;
  let fixture: ComponentFixture<ImageTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTechnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
