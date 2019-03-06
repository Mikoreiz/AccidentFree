var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/accidentfree',{useNewUrlParser: true});
var Schema = mongoose.Schema;
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var setDay = Date.now();

app.get('/', function(request, response){
        response.render('index',{
          setDay : setDay
        });
});

app.listen(3000, function(){
           console.log(setDay);
           });

