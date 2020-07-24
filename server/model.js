let data = [
  { id: 1, title: 'The Demo', artist: 'Donna Cox', year: '1968' },
  { id: 2, title: 'TV-Buddha', artist: 'Nam June Paik', year: '1974' },
  { id: 3, title: 'Observation of the Observation: Uncertainty', artist: 'Peter Weibel', year: '2000' },
  { id: 4, title: 'Tap and Touch Cinema)', artist: 'Valie Export', year: '1968' }
];

function getNextId() {
  return Math.max(...data.map(artifact => artifact.id)) + 1;
}

function insert(artifact) {
  artifact.id = getNextId();
  data.push(artifact);
  console.log(data);
}

function update(artifact) {
  artifact.id = parseInt(artifact.id, 10);
  const index = data.findIndex(item => item.id === artifact.id);
  data[index] = artifact;
}

module.exports = {
  getAll() {
    return data;
  },
  get(id) {
    return data.find(artifact => artifact.id === id);
  },
  delete(id) {
    data = data.filter(artifact => artifact.id !== id);
  },
  save(artifact) {
    artifact.id === '' ? insert(artifact) : update(artifact);
  },
};
