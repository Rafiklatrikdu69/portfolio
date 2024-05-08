import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-git',
  standalone: true,
  imports: [],
  templateUrl: './button-git.component.html',
  styleUrl: './button-git.component.css'
})
export class ButtonGitComponent {
  @Input() git!:string;
  linkGit(){
    location.href = this.git;
  }
}
