function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
  }
  
  function weatherInfo (celsius) {
    var c = convertToCelsius(celsius)
    if (c <= 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }