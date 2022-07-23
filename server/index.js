import {getDriverInfo, getRaceInfo, getTwitterInfo} from './api-caller.js';
import express from 'express';
import path from 'path';
import db from '../db/index.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.post('/driver', function(req, res) {
  console.log('POST to /driver');
  console.log(req.body);
  var nameSplit = req.body.driver.split(' ');

  getDriverInfo(nameSplit[1])
  .then((data) => {
    //Save to db
    res.json(data);
  })
  .catch((err) => {
    console.error(err);
  });
});

app.get('/raceInfo', function(req, res) {
  console.log('raceinfo');
  getRaceInfo(req.query.name.split(" ")[1], req.query.year)
  .then((data) => {
    res.json(data).end();
  })
  .catch((err) => {
    console.error(err);
  });
});

app.get('/twitterInfo', function(req, res) {
  console.log('twitterInfo');
  getTwitterInfo(req.query.id)
  .then((data) => {
    console.log('We did it again?');
    // console.log(data);
    res.json(data).end();
  })
  .catch((err) => {
    console.error(err);
  });
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});