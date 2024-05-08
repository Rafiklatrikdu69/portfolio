import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePersoComponent } from './image-perso.component';

describe('ImagePersoComponent', () => {
  let component: ImagePersoComponent;
  let fixture: ComponentFixture<ImagePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePersoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
