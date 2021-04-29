import React, { useEffect, useState } from 'react'
import api from 'axios'
import Capital from './components/Capital'
import Weather from './components/Weather';

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const LANGUAGE = 'pt_br'
const cidadeTeste = 'SALVADOR'

export default function App() {

  const [ weatherData, setWeatherData ] = useState({})

  useEffect(() => {
    apiCall()
  }, [])

  async function apiCall(){
    const { data } = await api.get(`${BASE_URL}q=${cidadeTeste},br&APPID=${API_KEY}&lang=${LANGUAGE}&units=metric`)
    setWeatherData(data)
  }

  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input type="text"/>

      <Weather data={weatherData}/>
      <Capital />

    </div>
  );
}

// componentes:
  // resultado da pesquisa
  // capitais

// bibliotecas:
  // axios
  // sass

// chamada api: process.env.REACT_APP_API_KEY)
  
