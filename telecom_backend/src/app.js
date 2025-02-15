const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Root Route
app.get('/', (req, resp) => {
    resp.send('Telecom API Running...')
});

module.exports = app;