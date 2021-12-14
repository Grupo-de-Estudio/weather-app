import React from 'react'

export const SearchHistory = ({
  ciudad,
  id,
  fecha,
  anio,
  dia,
  hora,
  mes,
  minutos,
  segundos,
  uid,
}) => {
  return (
    <div className="historys">
      <p className="bold">{`${ciudad.charAt(0).toUpperCase()}${ciudad
        .slice(1)
        .toLowerCase()}`}</p>
      <p>{`${dia}, ${fecha} de ${mes} ${anio} (${hora}:${minutos}:${segundos}).`}</p>
    </div>
  )
}
