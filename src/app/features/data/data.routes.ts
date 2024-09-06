import { defaultUrlMatcher, Routes } from '@angular/router';

const dataRoute: Routes = [
    {
        path: '',
        loadComponent: () => import ('./list/list.component').then (m => m.ListComponent),
    }
];

export default dataRoute;