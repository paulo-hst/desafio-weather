import React from 'react'
import Skeleton from 'react-loading-skeleton'

import './Loading.scss'
 
export default function Loading(props) {
  console.log(props)
  return (
    <div className="weatherContainer">

        <div className="mainTemperature ">
            <Skeleton count={1} height={20} duration={2} />
            <Skeleton count={1} height={50} duration={2} />
            <Skeleton count={1} height={20} duration={2} />
            <Skeleton count={1} height={50} duration={2} />
        </div>

        <div className="primaryData">
            <Skeleton count={3} height={20} duration={2} />
        </div>
        <br/>

        <Skeleton count={2} height={20} duration={2} />

    </div>
  )
}