const express = require('express');
const router = express.Router();

let data = [
  { id: 1, nama: "Ligar Taffany", nim: "20230801213", email: "ligarnew23@gmail.com" }
];

router.get('/', (req, res) => {
  res.json(data);
});

router.post('/', (req, res) => {
  const mahasiswa = req.body;
  mahasiswa.id = Date.now();
  data.push(mahasiswa);
  res.json(mahasiswa);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  data = data.filter(item => item.id != id);
  res.json({ status: 'deleted' });
});

module.exports = router;
