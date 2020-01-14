const Weather = (location) => {
  const apiKey = 'b5b3ce93b5cb1d7b191639b5156962d7';
  return fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID='+apiKey+'&units=metric', {
    Method: 'GET',
    headers : {
        'Accept': 'application/json'
      },
  })
  .then((raw) => raw.json())
  .then((response) => {
    return response
  })
}

export default Weather;
