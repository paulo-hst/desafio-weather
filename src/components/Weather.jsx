import React from 'react'
 
export default function Weather(props) {
  const { main, sys, weather, wind } = props.data

  return (
    <div>
        <h4>{main.name} - {sys.country}</h4>
        <h3>{main.temp}º - {weather[0].description}</h3>
        <h3>{main.temp_min}º - {main.temp_max}º - {main.feels_like}º</h3>
        <h3>{wind.speed}km/h - {main.humidity}%</h3>
    </div>
  )
}