import { getDocs, query, where } from '@firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useUserContext } from '../context/authContext'
import { tarjetas } from '../firebase/config'
import { Navbar } from './components/Navbar'
import { Searchbar } from './components/Searchbar'
import { SingleCard } from './components/SingleCard'

export const SearchScreen = ({
  desloguear,
  ciudades,
  setCiudades,
  setHistorial,
  subirDatos,
}) => {
  const { user } = useUserContext()
  const [bajarTarjetas, setBajarTarjetas] = useState([])

  const bajarDatos = getDocs(
    query(tarjetas, where('uid', '==', user.uid))
  ).then((snapshot) => {
    let datos = []
    snapshot.docs.forEach((doc) => {
      datos.push({ ...doc.data(), id: doc.id })
    })
    return datos
  })

  const cargarDatosBajados = async () => {
    const datos = await bajarDatos
    setBajarTarjetas(datos)
  }

  bajarTarjetas.sort((a, b) => {
    if (a.orden > b.orden) {
      return -1
    }
  })

  useEffect(() => {
    cargarDatosBajados()
  }, [ciudades])

  const borrarCiudad = (city) => {
    setBajarTarjetas(bajarTarjetas.filter((ciudad) => ciudad.ciudad != city))
  }

  return (
    <>
      <Navbar desloguear={desloguear} />
      <Searchbar
        setCiudades={setCiudades}
        setHistorial={setHistorial}
        subirDatos={subirDatos}
      />
      <div className="cards_content">
        {bajarTarjetas.map((city) => (
          <SingleCard
            key={city.id}
            ciudad={city.ciudad}
            id={city.id}
            borrarCiudad={borrarCiudad}
          />
        ))}
      </div>
    </>
  )
}
