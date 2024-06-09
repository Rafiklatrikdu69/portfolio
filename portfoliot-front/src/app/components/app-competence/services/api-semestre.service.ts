import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, lastValueFrom } from 'rxjs';
import { Semestre } from '../../../entity/Semestre';
import { environment } from '../../../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ApiSemestreService {
  
  url = environment.apiUrl;
  private competenceSemestre = new Subject<Semestre>();
  private ObsSemestre = this.competenceSemestre.asObservable();
  http = inject(HttpClient);
  
 async getSemestreById(id:number){
    let semestre =  await lastValueFrom( this.http.get<Semestre>(this.url +'semestre/'+id));;
    if(semestre!=undefined){
      this.competenceSemestre.next(semestre[0]);
      return semestre;
    }
  return new Semestre(1,'d',[])  
  }
  getSemester():Observable<Semestre>{
    return this.ObsSemestre;
  }
}
