// src/app/models/job-application.model.ts

export interface JobApplication {
    name: string;
    dob: Date;
    city: string;
    resume: File;
    additionalDocuments: File[];
    phone: string;
    description: string;
  }
  