var http = require('http');
var url = require('url')
var qs = require('querystring')
var exec = require('child_process').exec
var os = require('os')

var messages = [];

http.createServer(function (req, res) {
  var daQuery, fromPerson, toSay;
  res.writeHead(200, {'Content-Type': 'text/html'});

  daQuery = qs.parse(url.parse(req.url).query)
  if(daQuery["say"]){
      toSay = daQuery["say"].replace(/[\W\s\.-\?\!]/g,' ')
  }
  if(daQuery["fromName"]){
       fromPerson = daQuery["fromName"].replace(/[\W\s\.-\?\!]/g,' ')
  }

  console.log(fromPerson + " said:" + toSay)
  messages.push(fromPerson + " said:" + toSay)
  
  req.on('end',function(){
    if(toSay){
      if(fromPerson){
        exec('say -v "Kathy" ' + fromPerson + ' said ', function()
        {
          exec('say "' + toSay +'"')
        })
      }else{
        exec('say "' + toSay +'"') 
      }
    }
  })
  res.end('<form>your name:<input name="fromName"><br />message:<input name="say"><input type="submit"></form>Listen!<br/>' + messages.join('<br/>'));
  
  
}).listen(1337, '0.0.0.0');

console.log('Server running at http://127.0.0.1:1337/');
console.log("Just visit with ...:1337/?say=Your Message Here")

console.log(os.networkInterfaces())