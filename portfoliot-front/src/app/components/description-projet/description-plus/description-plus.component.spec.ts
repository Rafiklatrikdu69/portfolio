import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPlusComponent } from './description-plus.component';

describe('DescriptionPlusComponent', () => {
  let component: DescriptionPlusComponent;
  let fixture: ComponentFixture<DescriptionPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionPlusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
