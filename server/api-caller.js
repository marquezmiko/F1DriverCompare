import fetch from "node-fetch";

export function getDriverInfo (driver) {
  console.log('api driver call');
  return fetch('https://ergast.com/api/f1/drivers/' + driver + '.json')
    .then(response => response.json())
    .then((data) => {
      console.log(data.MRData.DriverTable);
      return data.MRData.DriverTable;
    })
    .catch((err) => {console.log(err)});
}

export function getRaceInfo (driver, year) {
  console.log('api race call');
  return fetch('https://ergast.com/api/f1/'+year+'/drivers/'+driver+'/results.json')
    .then(response => response.json())
    .then((data) => {
      console.log(data.MRData.RaceTable);
      return data.MRData.RaceTable;
    })
    .catch((err) => {console.log(err)});
}