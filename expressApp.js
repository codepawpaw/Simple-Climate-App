var express  = require('express');
var app = express();

var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public')); 

var server = require('http').Server(app);
server.listen(3000);

//require('./container')(app);
require('./app/routes')(app);