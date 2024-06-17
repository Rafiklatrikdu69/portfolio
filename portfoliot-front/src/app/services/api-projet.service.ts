import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {  lastValueFrom } from 'rxjs';
import { Projet } from '../entity/projet.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiProjetService {
   url = environment.apiUrl;
   http = inject(HttpClient)
   async getAllProjets(){
    return  lastValueFrom( this.http.get<Projet[]>(`${this.url}/projet/get`));
   }
   async getProjetById(id_projet : number)
   {
      return lastValueFrom(this.http.get<Projet>(`${this.url}/projet/${id_projet}`));
   }

}
