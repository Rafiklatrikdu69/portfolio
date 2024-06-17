import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Experience } from '../entity/Experience.model';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiExperienceService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl
  async getExperience(): Promise<Experience[] | undefined>{
   
    try {
      const result = await lastValueFrom(this.http.get<Experience[]>(`${this.apiUrl}/experience`))
      return result
    }
    catch (err) {
      console.error("error getting experience", err)
      
    }
  }
}
