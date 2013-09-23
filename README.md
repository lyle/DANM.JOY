Welcome DANM
------------

This introduction by example to NodeJS is inteneded to remove the barriers and show some posibilities of using NodeJS in art creation.

Start
-----

[Node](http://nodejs.org) is an open source application that interperets and runs JavaScript code.
  * Take a look at this [fun and free course from CodeSchool: JavaScrip Road Trip Part 1](http://www.codeschool.com/courses/javascript-road-trip-part-1)
  
Node is a command line utility, which means you run it by opening a terminal on a machine which has node and typing something like this:
  node 001_serve.js
This tells node to run and start executing the code in the file '001_serve.js' - to do this you must open terminal and be in the folder where a file like that exists. You may need an interoduction to the command line:
* [Introduction to Navigation](http://linuxcommand.org/lts0020.php) - OS X, Linux, Unix
* [Introduction to the Windows Command Line](http://www.bleepingcomputer.com/tutorials/windows-command-prompt-introduction/)

Getting your computer ready for this DANM.JOY
---------------------------------------------

* You must [install Node on your computer](http://nodejs.org/download/).
* You should probably have a good text editor that does syntax highlighting.
  Sublime Text 2, TextMate, BBEdi, NotePad ++, and many more are available.
* You can [download this repository](https://github.com/lyle/DANM.JOY/archive/master.zip) or if you know GIT simply clone it.

NPM and Node
------------

Some of these examples use 'modules' of other code, they are included in the project by using this sort of syntax:
  var exec = require('child_process').exec
The above example uses a module that is core to Node which means you do not need to install it to get it to work. Other modules you will need to install in your computer. You do this by using the 'npm' command. Please take a look at this [introduction to NPM](https://npmjs.org/doc/npm.html).
  npm install node-osc
Will install the Node Open Sound Contol module so you can use the module (like in 010_osc.js)
  var osc = require('node-osc');

001_serve.js
------------
starts a web server. If you run 'node 001_serve.js'

002_serve.js
------------
Using a module
  var qs = require('querystring')
Add this line at line 6 in the file
  console.log(qs.parse(url.parse(req.url).query))

005_favivon.js (woops)
--------------
  This file shows going and getting a file and saving it on your computer.

006_mp3.js
----------
You can download mp3s too.
Try regular expressions from http://rubular.com/

I really like this "play" command line tool which is part of the [SoX - Sound eXchange](http://sox.sourceforge.net/) <- installers exist there for OS X, Windows and Linux.
And for OS X you can use brew to isntall it:
* [Install Homebrew](https://github.com/mxcl/homebrew/wiki/installation)
* Then install SoX using homebrew
  bew install sox
After you install SoX you can play an audio file from the command line:
  play mp3file.mp3
Here is something that you can run to listen to random:
  play -c1 -r 44k -t s8 /dev/urandom
(You can stop a running terminal command with a 'Conrtol + C'

If you do not want to do all of that you can make some sound on OS X using this command:
  say stuff
But you will not be able to run some demos below.

007_say.js
----------
This one uses the "exec" to run a command line program from node. OS X only - but you can run 'cmd' on Windows to open another terminal.-- I think.

008_yousay.js
-------------
OS X only,... This starts a web server and you can use a web browser to have your compy talk.

009_express.js
--------------
To really do a web application go take a look at the expressJS guide. There is a note to look at ~/Code/spell - but that is just for me when I was presenting.

010_osc.js
----------
Open sound control is really cool - you can find a lot of cool apps that build clients for Open Sound Control. I have a cool iOS app that allows you to use a bunch of sensors on my iPhone to send data to this server. Cool stuff.

011 - 012
---------
the [baudio module](https://github.com/substack/baudio) (by substack) allows you to have a lot of fun with music with node. You will need SoX (above) to install the module:
  npm install baudio
Take a look at this [cool video of substack using baudio](https://www.youtube.com/watch?v=2oz_SwhBixs) to get inspired




