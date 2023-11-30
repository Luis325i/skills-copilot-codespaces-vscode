// Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Set port to environment variable PORT or 3000
app.set('port', (process.env.PORT || 3000));

// Set path to static files
app.use(express.static(path.join(__dirname, 'public')));

// Set path to node_modules
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

// Set path to views
app.set('views', path.join(__dirname, 'views'));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set path to routes
var routes = require('./routes/index');

// Use routes
app.use('/', routes);

// Start server
app.listen(app.get('port'), function() {
    console.log('Server started on port ' + app.get('port'));
});

module.exports = app;