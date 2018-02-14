import { Routes } from '@angular/router';

import { ResourceComponent } from './resource.component';
import { ListComponent } from './list/list.component';

export const resourceRoutes: Routes = [
  {
    path: '',
    component: ResourceComponent
  },
  {
    path: ':resource',
    component: ListComponent
  },
];
