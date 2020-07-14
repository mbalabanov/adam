var express = require( 'express' );
var bp = require( 'body-parser' );
var fs = require( 'fs' );

// Initialisierung von express
const app = express();
const serverport = 5003;

/* Serverport definieren */
app.listen(serverport);
console.log('Express started on port ' + serverport);


/* Alle Daten zurückgeben */
app.get('/alldata', function(req, res){

    fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
      var alledaten = {};
      alledaten = contents;
      res.send(alledaten);
    });
  
  });