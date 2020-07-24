const model = require('./model');
const view = require('./view');
const form = require('./form');

function listAction(request, response) {
  const items = model.getAll();
  const body = view(items);
  response.send(body);
}

function deleteAction(request, response) {
  const id = parseInt(request.params.id, 10);
  model.delete(id);
  response.redirect('/');
}

function formAction(request, response) {
  let item = { id: '', title: '', artist: '', year: '' };

  if (request.params.id) {
    item = model.get(parseInt(request.params.id, 10));
  }

  const body = form(item);
  response.send(body);
}

function saveAction(request, response) {
  const item = {
    id: request.body.id,
    title: request.body.title,
    artist: request.body.artist,
    year: request.body.year
  };
  model.save(item);
  response.redirect('/');
}

module.exports = {
  listAction,
  deleteAction,
  formAction,
  saveAction
};
