const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mahasiswaRoutes = require('./routes/mahasiswa');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/mahasiswa', mahasiswaRoutes);

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
