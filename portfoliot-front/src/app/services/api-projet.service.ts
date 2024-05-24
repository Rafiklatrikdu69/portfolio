import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../entity/projet';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiProjetService {
   url = environment.apiUrl;

  constructor(private http:HttpClient) {}
   public getAllProjets() : Observable<Projet[]>{
    return this.http.get<Projet[]>(this.url + 'projet/get', { withCredentials: true });
   }
   public getProjetById(id_projet : number) : Observable<Projet>
   {
      return this.http.get<Projet>(this.url + 'projet/'+ id_projet);
   }

}
