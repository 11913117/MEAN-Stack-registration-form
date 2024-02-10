import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../../services/job-application.service';
import { Router } from '@angular/router';

interface JobApplication {
  name: string;
  dob: Date;
  city: string;
  resume: string | File;
  phone: string;
  description?: string;
  isEditing?: boolean;
}

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {
  jobApplications: JobApplication[] = [];
  filteredApplications: JobApplication[] = [];
  searchTerm: string = '';
  isBackgroundToggled: boolean = false; // Add this property

  constructor(private jobAppService: JobApplicationService, private router: Router) { }

  ngOnInit(): void {
    this.fetchJobApplications();
  }

  fetchJobApplications(): void {
    this.jobAppService.getJobApplications(this.searchTerm).subscribe(applications => {
      this.jobApplications = applications.map(app => ({
        ...app,
        isEditing: false,
        resume: app.resume
      }));
      this.filteredApplications = this.jobApplications;
    });
  }

  search(): void {
    this.filteredApplications = this.jobApplications.filter(application =>
      application.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openEditMode(application: JobApplication): void {
    application.isEditing = !application.isEditing;
  }

  redirectToNewApplication(): void {
    this.router.navigate(['/new-application']);
  }

  toggleBackground(): void { // Define toggleBackground function
    this.isBackgroundToggled = !this.isBackgroundToggled;
  }
}
