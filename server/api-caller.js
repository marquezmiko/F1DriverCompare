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
      // console.log(data.MRData.RaceTable);
      return data.MRData.RaceTable;
    })
    .catch((err) => {console.log(err)});
}

export function getTwitterInfo (twitterID) {

  var requestOptions = {
    method: 'GET',
    headers: {
      Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAL%2BIfAEAAAAAG04NSOL6CDpvWoHezRCO7hYpOkg%3DQJVzuIZbei0JBKvlBWGeSjkvrECGylfVQA0GA1gKlgmmU26e3L",
      Cookie: "guest_id=v1%3A165855052341427892; guest_id_ads=v1%3A165855052341427892; guest_id_marketing=v1%3A165855052341427892; personalization_id=\"v1_cVGnSQRIthCEIMhOqOxNhg==\""
    },
    redirect: 'follow'
  };
  console.log('URL: ' + "https://api.twitter.com/2/users/"+twitterID+"?user.fields=public_metrics");
  return fetch("https://api.twitter.com/2/users/"+twitterID+"?user.fields=public_metrics", requestOptions)
    .then(response => response.json())
    .then((data) => {
      // console.log('RES:'+JSON.stringify(data));
      return data;
    })
    .catch(error => console.log('error', error));
}