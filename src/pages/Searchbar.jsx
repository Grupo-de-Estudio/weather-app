import React, { useState } from 'react'

export const Searchbar = ({ setCiudades }) => {
  const [input, setInput] = useState('')
  return (
    <div className="div_input">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setCiudades((prev) => [...prev, input])
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
