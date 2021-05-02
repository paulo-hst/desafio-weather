import React, { useEffect, useState } from 'react'
import api from './services/api'
import Capital from './components/Capital'
import Weather from './components/Weather'

const API_KEY = process.env.REACT_APP_API_KEY

export default function App() {

  const [ city, setCity ] = useState('')
  const [ weatherData, setWeatherData ] = useState({})
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  async function searchCity(){

    setIsLoading(true)

    await api
    .get(`?q=${city},br&APPID=${API_KEY + 2}&lang=pt_br&units=metric`)
    .then(resp => {
      setWeatherData(resp.data)
      setIsLoading(false)
      console.log('asd')
    })
    .catch(resp => {
      setError(resp.error)
      setIsLoading(false)
    })
    console.log(city)
    
  }

  if(isLoading){
    return <p>Carregando ...</p>
  }

  if(error){
    return <p>Erro: {error.message}</p>
  }

  return (  
    <div>
      <h1>Previsão do tempo</h1>
      <input 
        placeholder='Digite a cidade' 
        type="text" 
        onChange={event => setCity(event.target.value)} 
      />
      <button onClick={() => searchCity()}>Enviar</button>

      {/* <Weather data={weatherData}/>
      <Capital /> */}

    </div>
  )
}