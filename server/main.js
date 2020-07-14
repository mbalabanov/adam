const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Init express
const app = express();
const PORT = 5003;

// Express middleware
app.use(bodyParser.json());

// Load data from json-file & make data transformations on in-memory data while server is running
let archivedata = JSON.parse(fs.readFileSync('data/archivedata.json'));

// @route GET /artifacts
// @desc Get all data - names + birthday
app.get('/artifacts', (req, res) => {
  console.log('GET /artifacts');
  if (users) {
    res.status(200).json(archivedata);
  } else {
    res.status(500).json({ msg: 'Internal Server Error (500)' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running and listening on PORT ${PORT}`);
});
