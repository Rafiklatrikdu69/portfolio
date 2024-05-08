import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProjetComponent } from './image-projet.component';

describe('ImageProjetComponent', () => {
  let component: ImageProjetComponent;
  let fixture: ComponentFixture<ImageProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
