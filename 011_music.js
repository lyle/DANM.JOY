var baudio = require('baudio');

var n = 0;
var b = baudio(function (t) {
    var x = Math.sin(t * 262 + Math.sin(n));
    return x;
});



































var b2 = baudio(function (t) {
    var x = Math.sin(t * 262 + Math.sin(n));
    n += Math.sin(t);
    return x;
});
b.play();