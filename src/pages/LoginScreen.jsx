import React from 'react'

export const LoginScreen = ({ loguear }) => {
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
          <button onClick={loguear}>Iniciar sesion</button>
        </form>
      </div>
    </div>
  )
}
