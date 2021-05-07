import React from 'react'

import { format } from 'date-fns/'
import ptBR from 'date-fns/locale/pt-BR'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import './Weather.scss'

const iconStyle = {  
  fontSize: '0.9rem', 
  marginInline: 3,
  color: 'purple'
}
 
export default function Weather(props) {  
  const { name, main, sys, weather, wind } = props.data

  function roundTemperature(temp){
    return Math.round(temp)
  }

  function changeSpeed(speed){
    return String(Math.round(speed)).replace('.', ',')
  }

  function handleTime(){
    return format(new Date(), 'cccc, p', { locale: ptBR })
  }
  
  return (
    <div className="weatherContainer">

        <div className="mainTemperature">
          <h3>{name}, {sys.country}</h3>
          <p>{roundTemperature(main.temp)}º</p>
          <p>{handleTime()}</p>
          <div>
            <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt=""/>
          </div>
        </div>

        <div className="primaryData">
          <p>{weather[0].description}</p>
          <p>
            <ArrowUpwardIcon 
              style={ iconStyle }/>{roundTemperature(main.temp_max)}º | {roundTemperature(main.temp_min)}º
              <ArrowDownwardIcon
                style={ iconStyle }/>
          </p>
          <p>sensação térmica: {roundTemperature(main.feels_like)}º</p>
        </div>
        <br/>

        <div className="secondaryData">
          <div className="wind">
            <p>vento</p>
            <p>{changeSpeed(wind.speed)} km/h</p>
            
          </div>
          <div className="humidity">
            <p>umidade</p>
            <p>{main.humidity}%</p>            
          </div>
        </div>

    </div>
  )
}