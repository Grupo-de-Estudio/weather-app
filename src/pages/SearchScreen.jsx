import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Searchbar } from './Searchbar'
import { SingleCard } from './SingleCard'

export const SearchScreen = ({
  desloguear,
  ciudades,
  setCiudades,
  setHistorial,
}) => {
  const borrarCiudad = (city) => {
    setCiudades(ciudades.filter((ciudad) => ciudad.nombre !== city))
  }
  return (
    <>
      <Navbar desloguear={desloguear} />
      <Searchbar setCiudades={setCiudades} setHistorial={setHistorial} />
      <div className="cards_content">
        {ciudades.map((ciudad) => (
          <SingleCard
            key={ciudad.nombre}
            ciudad={ciudad.nombre}
            borrarCiudad={borrarCiudad}
          />
        ))}
      </div>
    </>
  )
}
