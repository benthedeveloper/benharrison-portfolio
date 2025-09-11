import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ProjectDetails } from './project-details/project-details';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'projects/:id',
    component: ProjectDetails
  }
];
