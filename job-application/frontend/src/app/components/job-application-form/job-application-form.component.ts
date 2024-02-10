// job-application-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobApplicationService } from '../../services/job-application.service';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css']
})
export class JobApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder, private jobApplicationService: JobApplicationService) {
    this.applicationForm = this.fb.group({
      name: ['', Validators.required],
      // dob: ['', Validators.required],
      city: ['', Validators.required],
      resume: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submitApplication(): void {
    if (this.applicationForm.valid) {
      // Call the service to submit the application data
      this.jobApplicationService.submitJobApplication(this.applicationForm.value)
        .subscribe(
          () => {
            // Reset the form after successful submission
            this.applicationForm.reset();
            alert('Application submitted successfully!');
          },
          error => {
            console.error('Error submitting application:', error);
            if (error.error && error.error.message) {
              // Display error message if available
              alert('Error: ' + error.error.message);
            } else {
              // Display generic error message
              alert('An error occurred while submitting the application.');
            }
          }
        );
    } else {
      // Mark all form fields as touched to display validation errors
      this.markFormGroupTouched(this.applicationForm);
    }
  }

  // Helper method to mark all form controls as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}