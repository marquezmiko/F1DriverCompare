const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});