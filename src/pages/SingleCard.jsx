import React, { useEffect, useState } from 'react'
import { fetchCityWeather } from '../api/Weather'
import Loader from 'react-loader-spinner'

export const SingleCard = ({ ciudad, borrarCiudad }) => {
  const [data, setData] = useState()

  useEffect(async () => {
    const resData = await fetchCityWeather(ciudad)
    setData(resData)
  }, [])

  if (!data)
    return (
      <div className="card_loader">
        <Loader type="TailSpin" color="white" height={100} width={100} />
      </div>
    )
  return (
    <div className="cards">
      <div className="card_image">
        <img
          className="clouds"
          src="https://i.ibb.co/y4GhG0H/cloud.png"
          alt="cloud"
          border="0"
        />
        <h2>{data.name}</h2>
        <p>{data.weather[0].description}</p>
        <p className="bold">{data.main.temp}º</p>
      </div>
      <div className="card_down">
        <p>
          Temp maxima: <span className="bold">{data.main.temp_max}º</span>
        </p>
        <p>
          Temp minima: <span className="bold">{data.main.temp_min}º</span>
        </p>
        <p>
          Sensasion Termica:{' '}
          <span className="bold">{data.main.feels_like}º</span>
        </p>
        <button className="borrar" onClick={() => borrarCiudad(ciudad)}>
          Borrar
        </button>
      </div>
    </div>
  )
}
