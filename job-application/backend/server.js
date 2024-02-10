// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/job_application_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Import and use routes
const jobApplicationRoutes = require('./routes/jobApplicationRoutes');
app.use('/job-applications', jobApplicationRoutes); // Mount routes under '/job-applications' path

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
