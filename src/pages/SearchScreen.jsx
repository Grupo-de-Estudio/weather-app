import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Searchbar } from './Searchbar'
import { SingleCard } from './SingleCard'

export const SearchScreen = ({ desloguear }) => {
  const [ciudades, setCiudades] = useState([])

  const borrarCiudad = (ciudad) => {
    setCiudades(ciudades.filter((nombre) => nombre !== ciudad))
  }
  return (
    <>
      <Navbar desloguear={desloguear} />
      <Searchbar setCiudades={setCiudades} />
      <div className="cards_content">
        {ciudades.map((nombre) => (
          <SingleCard
            key={nombre}
            ciudad={nombre}
            borrarCiudad={borrarCiudad}
          />
        ))}
      </div>
    </>
  )
}
