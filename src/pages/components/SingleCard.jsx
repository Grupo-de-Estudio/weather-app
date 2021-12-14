import React, { useEffect, useState } from 'react'
import { fetchCityWeather } from '../../api/Weather'
import Loader from 'react-loader-spinner'
import { deleteDoc, doc } from '@firebase/firestore'
import { db } from '../../firebase/config'

export const SingleCard = ({ ciudad, id, borrarCiudad }) => {
  const [data, setData] = useState()

  useEffect(async () => {
    const resData = await fetchCityWeather(ciudad)
    if (resData == undefined) {
      deleteDoc(doc(db, 'tarjetas', id))
      alert('INTRODUZCA UNA CIUDAD VÁLIDA') ? '' : location.reload()
    } else {
      setData(resData)
    }
  }, [])

  const borrarCiudadFirebase = () => {
    deleteDoc(doc(db, 'tarjetas', id))
  }

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
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
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
        <button
          className="borrar"
          onClick={() => {
            borrarCiudadFirebase()
            borrarCiudad(id)
          }}
        >
          Borrar
        </button>
      </div>
    </div>
  )
}
