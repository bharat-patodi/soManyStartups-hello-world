// Packages

const path = require('path');
const fs = require('fs');
const express = require('express');

// Create App
const app = express();

// View Engine
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

// Middleware
app.use(express.static(__dirname));

// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error Handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});

// Serve App
const port = 1000;
app.listen(port, function() {
  console.log('running at mera localhost: ' +port);
});
