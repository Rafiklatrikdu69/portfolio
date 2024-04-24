import { Routes } from '@angular/router';
import { DescriptionProjetComponent } from './components/description-projet/description-projet.component';

export const routes: Routes = [
    { path: 'projet/:id', component: DescriptionProjetComponent },
];
