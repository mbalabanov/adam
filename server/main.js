const express = require('express');
const morgan = require('morgan');
const bp = require('body-parser');

const { listAction, deleteAction, formAction, saveAction } = require('./controller');

const app = express();

app.use(express.static(__dirname + '/www'));

app.use(bp.urlencoded({ extended: false }));

app.use(morgan('common', { immediate: true }));

app.listen(5003, () => {
  console.log('Server gestartet auf http://localhost:5003');
});

app.get('/', listAction);
app.get('/delete/:id', deleteAction);
app.get('/form/:id?', formAction);
app.post('/save', saveAction);