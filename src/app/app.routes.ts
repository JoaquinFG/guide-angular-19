import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/beer-list/beer-list.component').then(m => m.BeerListComponent),
      },
      {
        path: 'random',
        loadComponent: () => import('./pages/beer-random/beer-random.component').then(m => m.BeerRandomComponent),
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./pages/beer-details/beer-details.component').then(m => m.BeerDetailsComponent),
      },
      {
        path: 'create',
        loadComponent: () => import('./pages/beer-create/beer-create.component').then(m => m.BeerCreateComponent),
      }
    ]
  }
];
