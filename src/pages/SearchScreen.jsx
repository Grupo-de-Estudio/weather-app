import React, { useState } from 'react'
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
  const borrarCiudad = (city) => {
    setCiudades(ciudades.filter((ciudad) => ciudad.nombre !== city))
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
        {ciudades.map((ciudad) => (
          <SingleCard
            key={Math.round(Math.random() * 1000)}
            ciudad={ciudad.nombre}
            borrarCiudad={borrarCiudad}
          />
        ))}
      </div>
    </>
  )
}
