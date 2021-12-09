import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = ({ desloguear }) => {
  const navigate = useNavigate()
  const cerrarSesion = () => {
    desloguear()
    navigate('/')
  }
  return (
    <nav className="nav_home">
      <div>
        <NavLink to="/search">Inicio</NavLink>

        <NavLink to="/history">History</NavLink>
      </div>
      <div>
        <button type="button" onClick={cerrarSesion} className="cerrar_sesion">
          Cerrar Sesion
        </button>
      </div>
    </nav>
  )
}
