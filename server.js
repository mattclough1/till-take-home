const express = require('express');
const path = require('path');

const app = express();

app.get('/api/till', (req, res) => {
  const transactionsFile = path.join(__dirname, 'transactions.json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Content-Type', 'application/json');
  res.sendFile(transactionsFile);
});

app.listen(3001);
