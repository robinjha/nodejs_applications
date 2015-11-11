var express = require('express');
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({extended : false})

var app = express();

app.use(cookieSession({
    name : 'session',
    keys : ['todosecret']
}))

app.get('/todo', function(req, res){
    res.send('')
});
.post('/todo/add', function (req, res) {
  res.send('POST request to homepage');
});

app.listen(3000)