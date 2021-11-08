import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

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
        <a href="#">EN</a>
        <a href="#">ES</a>
        <a href="#">PT</a>
        <button onClick={cerrarSesion} className="cerrar_sesion">
          Cerrar Sesion
        </button>
      </div>
    </nav>
  )
}
