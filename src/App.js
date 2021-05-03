import React, { useState } from 'react'
import api from './services/api'
import Weather from './components/Weather'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {

  const [ city, setCity ] = useState('')
  const [ weatherData, setWeatherData ] = useState({})
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)
  const [ found, setFound ] = useState(false)

  async function searchCity(city){

    if(city !== ''){
      setIsLoading(true)
  
      await api
      .get(`?q=${city},br&APPID=${API_KEY}&lang=pt_br&units=metric`)
      .then(resp => {
        setIsLoading(false)
        setWeatherData(resp.data)
        setFound(true)
      })
      .catch(err => {
        console.log(err.response)
        setError(err.response)
        setIsLoading(false)
      })      
    }else{
      alert('Digite o nome da cidade')
    }
  }

  function reloadPage(){
    setTimeout(() => {
      window.location.reload()
    }, 3000);
  }

  if(isLoading){
    return <p>Carregando ...</p>
  }

  if(error){
    return (
        <>
          <p>Erro: {error.data.message} - status: {error.status}. Redirecionando em 5 segundos...</p>
          {reloadPage()}
        </>
      )
  }

  return (  
    <div>
      <h1>Previsão do tempo</h1>
      <input 
        placeholder='Digite a cidade' 
        type="text"
        required
        onChange={event => setCity(event.target.value)} 
      />
      <button onClick={() => searchCity(city)}>Enviar</button>

      {found === true ? <Weather data={weatherData}/> : ''}

      {/* <Capital /> */}

    </div>
  )
}

export default React.memo(App)