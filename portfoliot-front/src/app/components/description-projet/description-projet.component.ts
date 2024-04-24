import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-projet',
  standalone: true,
  imports: [],
  templateUrl: './description-projet.component.html',
  styleUrl: './description-projet.component.css'
})
export class DescriptionProjetComponent {
  testId!: string;
constructor(private route: ActivatedRoute){

}
ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.testId = params['id']; // Access the 'id' parameter from the URL
    console.log('Test ID:', this.testId);
  });
}
}
