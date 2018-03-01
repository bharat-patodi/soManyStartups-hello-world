import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <p>Here's the 🍋-y first step.</p>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));






/*
const http = require('http');
const host = '127.0.0.1';
const port = '9000';
const server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<h1>Hell Worls</h1>');
});

*/
