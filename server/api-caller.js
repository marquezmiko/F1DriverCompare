import fetch from "node-fetch";

export function apiCaller (driver) {
  console.log('api call: ' + driver);
  return fetch('https://ergast.com/api/f1/drivers/' + driver + '.json')
    .then(response => response.json())
    .then((data) => {
      console.log(data.MRData.DriverTable);
      return data.MRData.DriverTable;
    })
    .catch((err) => {console.log(err)});
}

//module.exports.apiCaller = apiCaller;