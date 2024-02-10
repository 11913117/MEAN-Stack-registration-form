// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobApplicationListComponent } from './components/job-application-list/job-application-list.component';
import { JobApplicationFormComponent } from './components/job-application-form/job-application-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'; // Import Routes from @angular/router


const routes: Routes = [
  { path: '', redirectTo: '/applications', pathMatch: 'full' },
  { path: 'applications', component: JobApplicationListComponent },
  { path: 'new-application', component: JobApplicationFormComponent } // Add this route
];

@NgModule({
  declarations: [
    AppComponent,
    JobApplicationListComponent,
    JobApplicationFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    FormsModule, // Add FormsModule here
    HttpClientModule, AppRoutingModule,
    RouterModule // Import RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
