const express = require('express');
const router = express.Router();
const JobApplication = require('../models/jobApplication');

// POST route to create a new job application
router.post('/job-Applications', async (req, res) => {
  const jobApplication = new JobApplication({
    name: req.body.name,
    dateOfBirth: req.body.dateOfBirth,
    city: req.body.city,
    resume: req.body.resume,
    additionalDocuments: req.body.additionalDocuments,
    phone: req.body.phone,
    description: req.body.description
  });

  try {
    const newJobApplication = await jobApplication.save();
    res.status(201).json(newJobApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET route to fetch all job applications with optional search query
router.get('/', async (req, res) => {
  try {
    let jobApplications;
    if (req.query.search) {
      // If search query is provided, filter job applications by name
      jobApplications = await JobApplication.find({ name: { $regex: new RegExp(req.query.search, 'i') } });
    } else {
      // If no search query is provided, fetch all job applications
      jobApplications = await JobApplication.find();
    }
    res.status(200).json(jobApplications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
