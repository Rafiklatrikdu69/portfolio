import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiProjetService } from './services/api-projet.service';
import { ApitechnosService } from './services/apitechnos.service';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    CommonModule,
    FooterComponent
   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfoliot-front';
}
