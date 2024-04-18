import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Projet } from '../entity/projet';

@Injectable({
  providedIn: 'root'
})
export class ApiProjetService {
   url = "http://localhost:3000/";

  constructor(private http:HttpClient) {

   }

   public getAllProjets(){
    return this.http.get<Projet[]>(this.url + 'projet/get', { withCredentials: true });
   }
}
