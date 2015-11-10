var cookieSession = require('cookie-session')
var express = require('express');
var app = express();

app.set('trust proxy', 1)

app.use(cookieSession({
    name : 'session',
    keys : ['key1','key2']
}))

app.get('/todo', function(req, res){
    res.send('')
});
.post('/todo/add', function (req, res) {
  res.send('POST request to homepage');
});

app.listen(3000)