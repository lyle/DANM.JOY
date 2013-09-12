var http = require('http')
  , fs = require('fs')

var options =
{
    host: 'www.tonycuffe.com',
    port: 80,
    path: '/mp3/tailtoddle_lo.mp3'
}
var fileName = options.path.replace(/[\w\.-]/g,'_')

var request = http.get(options, function(res){
    var imagedata = ''
    res.setEncoding('binary')

    res.on('data', function(chunk){
        imagedata += chunk
    })

    res.on('end', function(){
        fs.writeFile(fileName, imagedata, 'binary', function(err){
            if (err) throw err
            console.log('File saved:' + fileName)
        })
    })

})