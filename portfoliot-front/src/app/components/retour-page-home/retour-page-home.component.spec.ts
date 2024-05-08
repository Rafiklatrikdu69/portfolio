import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourPageHomeComponent } from './retour-page-home.component';

describe('RetourPageHomeComponent', () => {
  let component: RetourPageHomeComponent;
  let fixture: ComponentFixture<RetourPageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetourPageHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetourPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
