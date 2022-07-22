//Import the mongoose module
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var DriverSchema = new Schema({
  name: String,
  number: Number,
  nationality: String,
  DOB: Date,
  wikipedia: String
});

var Driver = mongoose.model('Driver', DriverSchema);

var save = (driver) => {

  var newDriver = new Driver({
    name: driver.name,
    number: driver.number,
    nationality: driver.nationality,
    DOB: driver.dob,
    wikipedia: driver.wikipedia
  });

  newDriver.save()
  .then((data) => {
    console.log('SAVED: ' + data);
  })
  .catch((err) => {
    console.err('SAVE ERR: ' + err);
  });
}

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/f1drivers';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const utils = {
  save: save
};

export default utils;