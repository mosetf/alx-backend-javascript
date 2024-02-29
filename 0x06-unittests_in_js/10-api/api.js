const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

