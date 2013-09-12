var http = require('http')
  , fs = require('fs')

var options = {
    host: 'www.google.com'
  , port: 80
  , path: 'favicon.ico'
}

var request = http.get(options, function(res){
    var imagedata = ''
    res.setEncoding('binary')

    res.on('data', function(chunk){
        imagedata += chunk
    })

    res.on('end', function(){
        fs.writeFile(options.path, imagedata, 'binary', function(err){
            if (err) throw err
            console.log('File saved.')
        })
    })

})
