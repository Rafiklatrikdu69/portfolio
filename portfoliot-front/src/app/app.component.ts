import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiProjetService } from './services/api-projet.service';
import { HomeComponent } from './components/home/home.component';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ApiProjetService],
  imports: [HttpClientModule, RouterOutlet,NavComponent,AboutComponent,ProjetsComponent,HomeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfoliot-front';
}
