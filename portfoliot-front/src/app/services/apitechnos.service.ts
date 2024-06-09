import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Categorie } from '../entity/Categorie';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApitechnosService {
  url = environment.apiUrl;
  http = inject(HttpClient);
  public getAlltechnos():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.url+'categorie')
   }
}
