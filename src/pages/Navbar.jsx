import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  const cerrarSesion = () => {
    navigate('/login')
  }
  return (
    <nav className="nav_home">
      <div>
        <Link to="/search">Inicio</Link>

        <Link to="/history">History</Link>
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
