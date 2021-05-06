import React, { useState } from 'react'
import api from './services/api'
import Weather from './components/Weather'
import Skeleton from 'react-loading-skeleton'

import SearchIcon from '@material-ui/icons/Search'

import './App.scss'

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
      .get(`?q=${city}&APPID=${API_KEY}&lang=pt_br&units=metric`)
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

  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    alert('oi')
  }
};

  if(isLoading){
    return (
      <div>
        
        <p>Carregando ...</p>
        
        <Skeleton count={5} height={25}/>
      </div>
    )
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
    <div className="container">
      <header>
        <h1>React Weather</h1>
          <input
          placeholder='Digite a cidade' 
          type="text"
          required
          onChange={event => setCity(event.target.value)} 
          onKeyPress={handleKeypress}
          />
          <button
            className="button"
            onClick={() => searchCity(city)}
          >
            <SearchIcon />
          </button>
      </header>
      <section className="dataContainer">
        
        <div className="weatherData">
          {found === true ? <Weather data={weatherData}/> : ''}

          {/* <Capital /> */}
        </div>
      </section>
      
    </div>
  )
}

export default React.memo(App)