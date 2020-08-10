const express = require( 'express' );
const bp = require( 'body-parser' );
const morgan = require('morgan');
const { loadData, instructions, getAll, getItems, getItem, deleteItem, editItem, editFeatured, editNews, getNewsItem } = require('./controller');
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

app.get(['/artifacts', '/artifacts/', '/persons', '/persons/', '/events', '/events/', '/featured', '/featured/', '/news/', '/news', '/compliance', '/compliance/'], function(request, response) {
  getItems(request, response);
});

app.get(['/artifacts/:id', '/persons/:id', '/events/:id', '/featured/:id', '/compliance/:id'], function(request, response) {
  getItem(request, response);
});

app.get('/newsitem/:id', function(request, response) {
  getNewsItem(request, response);
});

app.delete(['/artifacts/:id', '/persons/:id', '/events/:id'], function(request, response) {
  deleteItem(request, response);
});

app.put(['/artifacts/:id', '/persons/:id', '/events/:id'], function(request, response) {
  editItem(request, response);
});

app.post(['/artifacts/:id', '/persons/:id', '/events/:id'], function(request, response) {
  editItem(request, response);
});

app.put('/news/:id', function(request, response) {
  editNews(request, response);
});

app.post('/news/:id', function(request, response) {
  editNews(request, response);
});

app.put('/featured/:id', function(request, response) {
  editFeatured(request, response);
});
