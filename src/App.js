import React, { useEffect, useState } from 'react'
import api from './services/api'
// import Capital from './components/Capital'
import Weather from './components/Weather'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {

  const [ city, setCity ] = useState('')
  const [ weatherData, setWeatherData ] = useState({})
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  const [ found, setFound ] = useState(false)

  async function searchCity(city){

    setIsLoading(true)

    await api
    .get(`?q=${city},br&APPID=${API_KEY}&lang=pt_br&units=metric`)
    .then(resp => {
      setIsLoading(false)
      setWeatherData(resp.data)
      setFound(true)
    })
    .catch(resp => {
      setError(resp.error)
      setIsLoading(false)
    })
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
      <button onClick={() => searchCity(city)}>Enviar</button>

      {/* CARREGAR COMPONENTE WEATHER APENAS AO ENCONTRAR CIDADE */}
      {found === true ? <Weather data={weatherData}/> : ''}

      <p>{JSON.stringify(weatherData.name)}</p>

      {/* <Capital /> */}

    </div>
  )
}

export default React.memo(App)