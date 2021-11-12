import React, { useState } from 'react'

export const Searchbar = ({ setCiudades }) => {
  const [input, setInput] = useState('')
  return (
    <div>
      <form
        className="div_input"
        onSubmit={(e) => {
          const busquedas = input
            .split(',')
            .map((city) => ({ nombre: city, fecha: new Date() }))
          e.preventDefault()
          setCiudades((prev) => [...prev, ...busquedas])
          setInput('')
        }}
      >
        <input
          className="input_search"
          type="text"
          placeholder="Ingrese una ciudad"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  )
}
