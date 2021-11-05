import React from 'react'

export const Navbar = () => {
  return (
    <nav className="nav_home">
      <div>
        <a href="#">Inicio</a>

        <a href="#">History</a>
      </div>
      <div>
        <a href="#">EN</a>
        <a href="#">ES</a>
        <a href="#">PT</a>
        <button className="cerrar_sesion">Cerrar Sesion</button>
      </div>
    </nav>
  )
}
