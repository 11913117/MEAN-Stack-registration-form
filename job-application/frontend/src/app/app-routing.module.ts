// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationListComponent } from './components/job-application-list/job-application-list.component';
import { JobApplicationFormComponent } from './components/job-application-form/job-application-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/applications', pathMatch: 'full' },
  { path: 'applications', component: JobApplicationListComponent },
  { path: 'new-application', component: JobApplicationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
