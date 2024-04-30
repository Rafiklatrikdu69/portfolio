import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../entity/Technology';
import { Categorie } from '../entity/Categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApitechnosService {
  url = "http://localhost:3000/";

  constructor(private http:HttpClient) { }
  public getAlltechnos():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.url+'categorie', { withCredentials: true })
   }
}
