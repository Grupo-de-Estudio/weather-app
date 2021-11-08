import React from 'react'
import { useNavigate } from 'react-router'

export const LoginScreen = ({ loguear }) => {
  const navigate = useNavigate()
  return (
    <div className="login_content">
      <div>
        <h1>Log in</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="form_login"
        >
          <input
            className="input_login"
            type="text"
            name="usuaruio"
            placeholder="Usuario"
          />
          <input
            className="input_login"
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          <button
            onClick={() => {
              loguear()
              navigate('/')
            }}
          >
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  )
}
