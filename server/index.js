import {apiCaller} from './api-caller.js';
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

  apiCaller(nameSplit[1])
  .then((data) => {
    console.log('I guess we did it?');
    //Save to db
    //return info
    res.json(data);
    //res.status(200).end();
  })
  .catch((err) => {
    console.error(err);
  })



  //call API
  // apiCaller()
  // .then((response) => {
  //   var driver = {
  //     name: req.name,
  //     number: response.number,
  //     nationality: response.nationality,
  //     DOB: response.dob,
  //     wikipedia: response.wikipedia
  //   }
  //   db.save(driver);
  // })
  // .catch((err) => {
  //   console.error(err);
  // })

});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});