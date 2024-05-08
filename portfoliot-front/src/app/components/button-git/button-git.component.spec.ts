import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGitComponent } from './button-git.component';

describe('ButtonGitComponent', () => {
  let component: ButtonGitComponent;
  let fixture: ComponentFixture<ButtonGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
