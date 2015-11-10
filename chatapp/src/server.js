var  http  =  require ('http');
var  url  =  require ('url');
var  querystring  =  require ('querystring');

var  server  =  http. createServer (function (req,  res)  {
    res. writeHead (200,  {"Content-Type":  "text / plain"});
    res. write ('Hi Everyone!');
    res. end ();
});

server.on('close', function(){
    console.log('Bye bye!');
})

server. listen (8080);
server.close();
