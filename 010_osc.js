var osc = require('node-osc');
var os = require('os');

var oscServer = new osc.Server(3333, '0.0.0.0');
oscServer.on("message", function (msg, rinfo) {
  console.log(msg)
});

console.log("I have started - my IP is something like...")
console.log(os.networkInterfaces())