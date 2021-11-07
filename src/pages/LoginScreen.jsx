import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/search', { replace: true })
  }
  return (
    <div className="login_content">
      <div>
        <h1>Log in</h1>
        <form className="form_login" action="">
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
          <button onClick={handleLogin}>Iniciar sesion</button>
        </form>
      </div>
    </div>
  )
}
