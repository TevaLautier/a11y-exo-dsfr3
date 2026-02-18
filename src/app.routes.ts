import { DossiersPage } from './app/pages/dossier/dossiers-page/dossiers-page';
import { Routes } from '@angular/router';
import { PersonneFormPage } from './app/pages/dossier/personnes/personne-form-page/personne-form-page';
import { AccueilPage } from './app/pages/accueil/accueil-page/accueil-page';

export const routes: Routes = [
  {
    //chemin accueil
    path: '',
    redirectTo:'/accueil',
    pathMatch:'full'
  },
  {
    //chemin accueil
    path: 'accueil',
    component: AccueilPage,
  },
  {
    //chemin dossier
    path: 'dossiers',
    component: DossiersPage,
  },
  {
    //chemin dossier > ajout personne
    path: 'dossiers',
    children: [
      {
        path: 'personne',
        children: [
          {
            path: 'add',
            children: [
              {
                path: '',
                component: PersonneFormPage,
              },
            ],
          },
        ],
      },
    ],
  },
];
