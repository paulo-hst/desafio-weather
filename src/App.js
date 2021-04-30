import React, { useEffect, useState } from 'react'
import api from './services/api'
import Capital from './components/Capital'
import Weather from './components/Weather';

const API_KEY = process.env.REACT_APP_API_KEY
// const LANGUAGE = ''
const cidadeTeste = 'Salvador'

export default function App() {
//?q=${cidadeTeste},br&APPID=${API_KEY}&lang=${LANGUAGE}&units=metric

  const [ weatherData, setWeatherData ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState('')
  
  useEffect(() => {
    api
      .get(`?q=${cidadeTeste},br&APPID=${API_KEY}&lang=pt_br&units=metric`)
      .then(resp => {
        setWeatherData(resp.data)
        setIsLoading(false)
      })
      .catch(resp => {
        setError(resp.error)
        setIsLoading(false)
      })
  },[])

  if(isLoading){
    // utilizar skeleton?
    return <p>Carregando ...</p>
  }

  if(error){
    return <p>Erro: {error.message}</p>
  }
  

  return (  
    <div>
      <h1>Previsão do tempo</h1>
      <input type="text"/>

      <h1>Cidade: {weatherData.name}</h1>

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
  
