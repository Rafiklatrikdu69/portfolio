import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Semestre } from '../../../entity/Semestre';
import { environment } from '../../../../environments/environment';
import { Niveau } from '../../../entity/Niveau';



@Injectable({
  providedIn: 'root'
})
export class ApiSemestreService {
  
  url = environment.apiUrl;
  private competenceSemestre = new Subject<Semestre>();
  private ObsSemestre = this.competenceSemestre.asObservable();
  constructor(private http:HttpClient) {}
  
 async getSemestreById(id:number){
    let semestre = await this.http.get<Semestre>(this.url +'semestre/'+id).toPromise();;
    if(semestre!=undefined){
      console.log(semestre);
      this.competenceSemestre.next(semestre[0]);
      return semestre;
    }
  return new Semestre(1,'d',[],new Niveau(12,''))
 
  
  }
  getSemester():Observable<Semestre>{
    return this.ObsSemestre;
  }
}
