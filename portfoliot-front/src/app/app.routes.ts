import { Routes } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { DescriptionProjetComponent } from './components/description-projet/description-projet.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: '' ,component:RootComponent
    },
    {
        path: 'projet/:id',component:DescriptionProjetComponent,
        // children:[
        //     {
        //         path: '**',component:PageNotFoundComponent
        //     }
        // ]
    },
    {
        path: '**', pathMatch: 'full',component:PageNotFoundComponent
    }
];
