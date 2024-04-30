import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Projet } from '../entity/projet';
import { Technology } from '../entity/Technology';

@Injectable({
  providedIn: 'root'
})
export class ApiProjetService {
   url = "http://localhost:3000/";

  constructor(private http:HttpClient) {

   }

   public getAllProjets() : Observable<Projet[]>{
    return this.http.get<Projet[]>(this.url + 'projet/get', { withCredentials: true });
   }

}
