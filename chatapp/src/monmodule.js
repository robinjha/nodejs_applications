var express = require ('express');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var app = express();
/*
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You are Home');
});

app.get('/api/v1', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Version 1');
});


app.get('/api/v2', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Version 2');
});

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page not found!');
});

app.get('/api/:version/sample', function(req, res) {
    var names = ['Rob','Bob','Sob'];
    res.render('sample.ejs', {api: req.params.version.sample, names: names});
});

app.get('/count/:number', function(req, res) {
    var names = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {count: req.params.number, names: names});
});*/


app.use(morgan('combined'))
.use(express.static(__dirname + '/public'))
.use(favicon(__dirname + '/public/favicon.ico'))
.use(function(req, res){
    res.send('Hello');
});

/*
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You are Home');
})
.get('/api/v1', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Version 1');
})
.get('/api/v2', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Version 2');
})
.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page not found!');
});*/

app.listen(8080);

