var express = require( 'express' );
var bp = require( 'body-parser' );
var fs = require( 'fs' );

// Initialisierung von express
const app = express();
const serverport = 5003;

/* Serverport definieren */
app.listen(serverport);
console.log('Express started on port ' + serverport);


/* Datenvariable */
let alldata = {};
let artifactsdata = {};
let personsdata = {};
let teamsdata = {};
let collectionsdata = {};
let exhibitionsdata = {};
let featureddata = {};


/* Alle Daten zurückgeben */
app.get('/alldata', function(req, res){
  fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
    alldata = contents;
    res.send(alldata);
  });
});

app.get('/artifacts', function(req, res){
  fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
    artifactsdata = JSON.parse(contents).artifacts;
    res.send(artifactsdata);
  });
});

app.get('/persons', function(req, res){
  fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
    personsdata = JSON.parse(contents).persons;
    res.send(artifactsdata);
  });
});

app.get('/teams', function(req, res){
  fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
    teamsdata = JSON.parse(contents).teams;
    res.send(teamsdata);
  });
});

app.get('/collections', function(req, res){
  fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
    collectionsdata = JSON.parse(contents).collections;
    res.send(collectionsdata);
  });
});

app.get('/exhibitions', function(req, res){
  fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
    exhibitionsdata = JSON.parse(contents).exhibitions;
    res.send(exhibitionsdata);
  });
});

app.get('/featured', function(req, res){
  fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
    featureddata = JSON.parse(contents).featured;
    res.send(featureddata);
  });
});