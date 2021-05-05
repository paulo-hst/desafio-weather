import React from 'react'

import './Weather.scss'
 
export default function Weather(props) {
  const { name, main, sys, weather, wind } = props.data

  function roundTemperature(temp){
    return Math.round(temp)
  }

  function changeSpeed(speed){
    return String(speed).replace('.', ',')
  }

  function handleTime(){
    
  }
  
  return (
    <div className="weatherContainer">

        <div className="mainTemperature">
          <h3>{name} - {sys.country}</h3>
          <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt=""/>
          <p>{roundTemperature(main.temp)}º</p>
        </div>

        <div className="primaryData">
          <p>terça-feira, 20h18</p>
          <p>{weather[0].description}</p>
          <p>max: {roundTemperature(main.temp_min)}º | min: {roundTemperature(main.temp_max)}º</p>
        </div>
        <br/>
        <div className="secondaryData">
          <p>sensação térmica: {roundTemperature(main.feels_like)}º</p>
          <p>vento: {changeSpeed(wind.speed)} km/h</p>
          <p>umidade: {main.humidity}%</p>
        </div>
    </div>
  )
}