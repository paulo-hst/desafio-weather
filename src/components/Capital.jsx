// import React, { useEffect, useState } from "react";
// import api from "../services/api";
// import cities from "../utils";

// const API_KEY = process.env.REACT_APP_API_KEY;

// export default function Capital() {
//   const [capital, setCapital] = useState([]);
//   const [max, setMax] = useState([]);
//   const [min, setMin] = useState([]);

//   setCapital(i => [...i, resp.data.name]);
//   setMax(i => [...i, resp.data.main.temp_max]);
//   setMin(i => [...i, resp.data.main.temp_min]);


//   useEffect(()=>{
//     getData(cities[0])
//     console.log(capital)
//   }, [capital])

//   async function getData(city){
//     capital.map(async item => {
//       const { data } = await api.get(`?q=${city},br&APPID=${API_KEY}&lang=pt-br&units=metric`)
      
//     console.log(capital)
//     })
//   }
  
  

//   return (
//     <div>
//       <h3>Capitais</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>cidade</th>
//             <th>min</th>
//             <th>max</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td></td>
//           </tr>

//         </tbody>

//       </table>

//     </div>
//   )
// }
