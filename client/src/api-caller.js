function apiCaller (website, url) {
  console.log('api call: ' + website + ', ' + url);
  return fetch('https://ergast.com/api/f1/drivers/gasly.json')
    .then(response => response.json())
    .then((data) => {
      console.log(data.MRData.DriverTable);
      return data.MRData.DriverTable;
    })
    .catch((err) => {console.log(err)});
}

export {apiCaller};