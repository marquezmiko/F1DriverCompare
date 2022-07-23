import {getDriverInfo, getRaceInfo} from './api-caller.js';
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
    console.log('I guess we did it?');
    //Save to db
    //return info
    res.json(data);
    //res.status(200).end();
  })
  .catch((err) => {
    console.error(err);
  });
});

app.get('/raceInfo', function(req, res) {
  console.log('raceinfo');
  getRaceInfo(req.query.name.split(" ")[1], req.query.year)
  .then((data) => {
    console.log('We did it again?');
    res.json(data);
  })
  .catch((err) => {
    console.error(err);
  });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});