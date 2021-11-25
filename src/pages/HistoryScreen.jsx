import React from 'react'
import { Navbar } from './Navbar'
import { SearchHistory } from './SearchHistory'

export const HistoryScreen = ({ desloguear, historial }) => {
  return (
    <>
      <Navbar desloguear={desloguear} />
      <div className="history_content">
        {historial.map((ciudad) => (
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
