var express = require('express');
var server = express();


server.get('/', function(request, response){
  response.sendFile('public/html/index.html',{root: __dirname});
  /*noteAbove:gotta tell the server to look for index.html - not the {} are configuration
  and you are telling it to 'star' at the "root __dirname"*/
});

/*below tells server to get up and running. 8080 refers to a port or doorway.
After setting this doorway, we added a second request to run a function
that listens to the port 8080 activites so we know it's all running.*/
server.listen(8080,function(){
  console.log('Now listening on port...',8080);
});
