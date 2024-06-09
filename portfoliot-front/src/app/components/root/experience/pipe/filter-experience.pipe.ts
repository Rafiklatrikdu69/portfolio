import { Pipe, PipeTransform } from '@angular/core';
import { Experience } from '../../../../entity/Experience.model';

@Pipe({
  name: 'filterExperience',
  standalone: true
})
export class FilterExperiencePipe implements PipeTransform {

  transform(experience: any[], scolaireBoolean: boolean): Experience [] {

    return experience.filter(exp => {
      return exp.scolaire === scolaireBoolean
    });
  }

}
