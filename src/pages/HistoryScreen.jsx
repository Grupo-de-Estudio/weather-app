import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { SearchHistory } from './SearchHistory'

export const HistoryScreen = ({ desloguear, ciudades }) => {
  const [historial] = useState(ciudades)
  const newHistorial = historial.reverse().slice(0, 10)

  return (
    <>
      <Navbar desloguear={desloguear} />
      <div className="history_content">
        {newHistorial.map((ciudad) => (
          <SearchHistory
            ciudad={ciudad.nombre}
            key={ciudad.nombre}
            fecha={ciudad.fecha}
          />
        ))}
      </div>
    </>
  )
}
