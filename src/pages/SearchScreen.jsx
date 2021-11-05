import React from 'react'

export const SearchScreen = () => {
  return (
    <>
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
      <div className="div_input">
        <input type="text" placeholder="Ingrese una ciudad" />
      </div>
      <div className="cards_content">
        <div className="cards">
          <div className="card_image">
            <img
              className="clouds"
              src="https://i.ibb.co/y4GhG0H/cloud.png"
              alt="cloud"
              border="0"
            />
            <h2>El Tigre</h2>
            <p>Muy nublado</p>
            <p>
              <b>26º</b>
            </p>
          </div>
          <div className="card_down">
            <p>
              Temperatura maxima: <b>32º</b>
            </p>
            <p>
              Temperatura minima: <b>20º</b>
            </p>
            <p>
              Sensasion Termica: <b>28º</b>
            </p>
            <button className="borrar">Borrar</button>
          </div>
        </div>
        <div className="cards">
          <div className="card_image">
            <img
              className="clouds"
              src="https://i.ibb.co/y4GhG0H/cloud.png"
              alt="cloud"
              border="0"
            />
            <h2>El Tigre</h2>
            <p>Muy nublado</p>
            <p>
              <b>26º</b>
            </p>
          </div>
          <div className="card_down">
            <p>
              Temperatura maxima: <b>32º</b>
            </p>
            <p>
              Temperatura minima: <b>20º</b>
            </p>
            <p>
              Sensasion Termica: <b>28º</b>
            </p>
            <button className="borrar">Borrar</button>
          </div>
        </div>
        <div className="cards">
          <div className="card_image">
            <img
              className="clouds"
              src="https://i.ibb.co/y4GhG0H/cloud.png"
              alt="cloud"
              border="0"
            />
            <h2>El Tigre</h2>
            <p>Muy nublado</p>
            <p>
              <b>26º</b>
            </p>
          </div>
          <div className="card_down">
            <p>
              Temperatura maxima: <b>32º</b>
            </p>
            <p>
              Temperatura minima: <b>20º</b>
            </p>
            <p>
              Sensasion Termica: <b>28º</b>
            </p>
            <button className="borrar">Borrar</button>
          </div>
        </div>
      </div>
    </>
  )
}
