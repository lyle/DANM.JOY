var http = require('http');
var url = require('url')
var qs = require('querystring')
var exec = require('child_process').exec

http.createServer(function (req, res) {
  var toSay;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  req.on('end',function(){

    toSay = qs.parse(url.parse(req.url).query)
    if(toSay["say"]){
      toSay = toSay["say"].replace(/[\W\s\.-\?\!]/g,' ')
      console.log(toSay)
      exec('say "' + toSay +'"')
    }
    
  })
  res.end('Listen!\n');
  
  
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
console.log("Just visit with ...:1337/?say=Your Message Here")