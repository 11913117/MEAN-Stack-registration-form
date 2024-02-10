// src/app/services/job-application.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from '../models/job-application.model';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getJobApplications(searchTerm?: string): Observable<JobApplication[]> {
    let url = `${this.apiUrl}/job-applications`;
    if (searchTerm) {
      url += `?search=${searchTerm}`;
    }
    return this.http.get<JobApplication[]>(url);
  }

  submitJobApplication(applicationData: JobApplication): Observable<any> {
    return this.http.post(`${this.apiUrl}/job-applications/job-Applications`, applicationData);
  }
}
