import { Routes } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: '' ,component:RootComponent
    },
    {
        path: 'projet/:id',
        loadComponent: () => 
            import('./components/description-projet/description-projet.component')
                .then(c => c.DescriptionProjetComponent)
    },
    {
        path: 'competence',
        loadComponent: () => 
            import('./components/app-competence/app-competence.component')
                .then(c => c.AppCompetenceComponent)
    },
    {
        path: '**', pathMatch: 'full',component:PageNotFoundComponent
    }
];
