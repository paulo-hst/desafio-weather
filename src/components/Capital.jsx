import React, { useEffect, useState } from 'react'
import api from '../services/api'
import cities from '../utils'

const API_KEY = process.env.REACT_APP_API_KEY

const teste = cities

export default function Capital() {
  const [ capital, setCapital ] = useState([])
  const [ max, setMax ] = useState([])
  const [ min, setMin ] = useState([])

  useEffect(() => {
    teste.map(item => {
      api
	  	.get(`?q=${item},br&APPID=${API_KEY}&lang=pt-br&units=metric`)
        .then(resp => {
			// resp.data.main.temp_max: maximo
			// resp.data.main.temp_min: minimo
			// resp.data.name: nome da cidade
			
			setCapital(i => [...i, resp.data.name])
			setMax(i => [...i, resp.data.main.temp_max])
			setMin(i => [...i, resp.data.main.temp_min])
		  
        })
    })
  },[])

  return(
    <div>
      <h3>Capitais</h3>
      <ul>
      </ul>
    </div>
  )

}
