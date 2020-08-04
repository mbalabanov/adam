const express = require( 'express' );
const bp = require( 'body-parser' );
const morgan = require('morgan');
const { loadData, instructions, getItems, getItem, deleteItem, editArtifact, editPerson, editTeam, editCollection, editExhibition, editFeatured } = require('./controller');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5003;

app.use(cors());

app.use( bp.urlencoded({ extended:false}) );

function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

app.use(bp.urlencoded({ extended: false }));
app.use(morgan('common', { immediate: true }));

/* Server-Port */
app.listen(port);
console.log('Express started on port ' + port);

loadData();

app.get('/', function(request, response) {
  instructions(request, response);
});

app.get('/all', function(request, response) {
  getAll(request, response);
});

app.get(['/artifacts', '/artifacts/', '/persons', '/persons/', '/teams', '/teams/', '/collections', '/collections/', '/exhibitions', '/exhibitions/', '/featured', '/featured/'], function(request, response) {
  getItems(request, response);
});

app.get(['/artifacts/:id', '/persons/:id', '/teams/:id', '/collections/:id', '/exhibitions/:id', '/featured/:id'], function(request, response) {
  getItem(request, response);
});

app.delete(['/artifacts/:id', '/persons/:id', '/teams/:id', '/collections/:id', '/exhibitions/:id'], function(request, response) {
  deleteItem(request, response);
});

app.put('/artifacts/:id', function(request, response) {
  editArtifact(request, response);
});

app.post('/artifacts/:id', function(request, response) {
  editArtifact(request, response);
});

app.put('/persons/:id', function(request, response) {
  editPerson(request, response);
});

app.post('/persons/:id', function(request, response) {
  editPerson(request, response);
});

app.put('/teams/:id', function(request, response) {
  editTeam(request, response);
});

app.post('/teams/:id', function(request, response) {
  editTeam(request, response);
});

app.put('/collections/:id', function(request, response) {
  editCollection(request, response);
});

app.post('/collections/:id', function(request, response) {
  editCollection(request, response);
});

app.put('/exhibitions/:id', function(request, response) {
  editExhibition(request, response);
});

app.post('/exhibitions/:id', function(request, response) {
  editExhibition(request, response);
});

app.put('/featured/:id', function(request, response) {
  editFeatured(request, response);
});
