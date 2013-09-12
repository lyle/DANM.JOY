var baudio = require('baudio');
// http://www.youtube.com/watch?v=2oz_SwhBixs
var n = 0;
var b = baudio(function (t) {
    var x = Math.sin(t * 862 + Math.sin(n));
    return x;
});



































var b2 = baudio(function (t) {
    var x = Math.sin(t * 262 + Math.sin(n));
    n += Math.sin(t);
    return x;
});
b2.play();