
function readForecast(lat, lon) {

  var metadata = $.getJSON( "https://api.weather.gov/points/"+lat+","+lon, function (f) {
    var forecast = f.properties.forecast;
    console.log(forecast);
    var forecast_data = $.getJSON( forecast, function (f) {
  })

}

setInterval(readForecast(41.3087,-72.9329), 10000);