import React from 'react'
import { Navbar } from './components/Navbar'
import { SearchHistory } from './components/SearchHistory'

export const HistoryScreen = ({ desloguear, historial }) => {
  return (
    <>
      <Navbar desloguear={desloguear} />
      <div className="history_content">
        {historial.map((ciudad) => (
          <SearchHistory
            ciudad={ciudad.nombre}
            key={Math.round(Math.random() * 1000)}
            fecha={ciudad.fecha}
          />
        ))}
      </div>
    </>
  )
}
