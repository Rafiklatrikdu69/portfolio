import { Component } from '@angular/core';
import { ApitechnosService } from '../../services/apitechnos.service';
import { Technology } from '../../entity/Technology';
import { Categorie } from '../../entity/Categorie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  constructor(private api:ApitechnosService){}
      techno :Categorie[] =[]
  ngOnInit(): void {
    this.api.getAlltechnos().subscribe((data) =>{
        
         this.techno = data
         console.log(this.techno)
    })
  }
}
