var osc = require('node-osc');
var baudio = require('baudio');

var oscServer = new osc.Server(3333, '0.0.0.0');
oscServer.on("message", function (msg, rinfo) {
  if(msg[0] == "/mrmr/accelerometerZ/33/iPhoneLyle" )//&& msg[1] > 19)
  {
   // console.log("back:" + msg[1])
  }
  if(msg[0] == "/mrmr/accelerometerY/33/iPhoneLyle" )//&& msg[1] > 19)
  {
    //console.log("right?" + msg[1])
  }
  
  if(msg[1] ==1 ){
  reg = /tactilezoneTouchDown\/34/;
  
  if( !(reg.exec(msg[0]) === null)){
      //console.log("TUIO message:");
    
      //console.log(msg);
      console.log("that one!")
   }
   reg = /tactilezoneTouchDown\/30/;
  
   if( !(reg.exec(msg[0]) === null)){
       //console.log("TUIO message:");
    
       //console.log(msg);
       console.log("< < < this one!")
    }
    
    reg = /tactilezoneTouchDown\/31/;
  
    if( !(reg.exec(msg[0]) === null)){
        //console.log("TUIO message:");
    
        //console.log(msg);
        console.log("NOOOOOO")
     }
    
   }
   var n = 0;
   var b = baudio(function (t) {
       var x = Math.sin(t * 262 + Math.sin(n));
       n += Math.sin(t);
       return x;
   });
   
   
   reg = /tactilezoneTouchDown\/32/;
 
   if( !(reg.exec(msg[0]) === null)){
       //console.log("TUIO message:");
       if (msg[1]==1){
        b.play(); 
       }else{
         b.stop();
       }
       
       //console.log(msg);
       console.log("NOOOOOO")
    }

  
   
});