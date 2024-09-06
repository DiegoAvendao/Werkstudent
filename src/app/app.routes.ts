import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo:'/data', pathMatch:'full' },
    { path: 'data', loadChildren: ()=> import('./features/data/data.routes') },
    { path: '**', redirectTo: '/data' }
];

