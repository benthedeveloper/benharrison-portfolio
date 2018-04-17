import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-work', component: MyWorkComponent },
  { path: 'my-skills', component: MySkillsComponent },
  { path: 'experiments', component: ExperimentsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
