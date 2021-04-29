import React from 'react'

    /**
     * nome da cidade, estado - país / name, sys.country
     * temperatura - descrição / main.temp, weather.description
     * minima / temp_min
     * maxima / temp_max
     * sensação / feels_like
     * vento kmph / 4.63
     * umidade / 78
     * proximos 5 dias / 
     *
     */
    
function Weather(props) {
  return (
    <div>
        <h4>{props.data.name} - {props.data.sys.country}</h4>
        <h3>{props.data.main.temp}º - {props.data.weather[0].description}</h3>
        <h3>{props.data.main.temp_min}º - {props.data.main.temp_max}º - {props.data.main.feels_like}º</h3>
        <h3>{props.data.wind.speed}km/h - {props.data.main.humidity}%</h3>
    </div>
  )
}

export default Weather;