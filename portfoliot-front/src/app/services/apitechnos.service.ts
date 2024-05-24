import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../entity/Technology';
import { Categorie } from '../entity/Categorie';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApitechnosService {
  url = environment.apiUrl;

  constructor(private http:HttpClient) { }
  public getAlltechnos():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.url+'categorie', { withCredentials: true })
   }
}
