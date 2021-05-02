import React, { useEffect, useState } from "react";
import api from "../services/api";
import cities from "../utils";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Capital() {
  const [capital, setCapital] = useState([]);
  const [max, setMax] = useState([]);
  const [min, setMin] = useState([]);

  useEffect(() => {
    cities.map((item) => {
      api
        .get(`?q=${item},br&APPID=${API_KEY}&lang=pt-br&units=metric`)
        .then((resp) => {
          // setCapital(i => [...i, resp.data.name])
          // setMax(i => [...i, resp.data.main.temp_max])
          // setMin(i => [...i, resp.data.main.temp_min])

          if (capital[26]) {
            return;
          }
          setCapital(i => [...i, resp.data.name]);
          setMax(i => [...i, resp.data.main.temp_max]);
          setMin(i => [...i, resp.data.main.temp_min]);
        });
    });
  }, []);

  return (
    <div>
      <h3>Capitais</h3>
      <table>
        <thead>
          <tr>
            <th>cidade</th>
            <th>min</th>
            <th>max</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            {capital.map(item => <td>{item}</td>)}
            {max.map(item => <td>{item}</td>)}
            {min.map(item => <td>{item}</td>)}
          </tr>

          <tr>
            
          </tr>

          {capital.map(item => <tr>
            
            {capital.map(item => <td>{item}</td>)}
            {max.map(item => <td>{item}</td>)}
            {min.map(item => <td>{item}</td>)}
          </tr>)}

        </tbody>

      </table>

    </div>
  )
}
