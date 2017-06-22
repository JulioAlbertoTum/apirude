var express = require('express'),
cors = require('cors'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Student = require('./api/rudeModel.js'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Rudedb')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var routes = require('./api/rudeRoutes');
routes(app);

app.listen(port);

console.log('La API REST  de rude se esta ejecutando en:' + port);
