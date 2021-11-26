import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchScreen } from './pages/SearchScreen'
import { HistoryScreen } from './pages/HistoryScreen'
import { LoginScreen } from './pages/LoginScreen'
import { googleLogin, logout } from './actions/auth'
import { Context } from './context/authContext'
import { useEffect } from 'react/cjs/react.development'
import { auth } from './firebase/config'

export const WeatherApp = () => {
  const { user, setUser } = useContext(Context)
  const [ciudades, setCiudades] = useState([])
  const [historial, setHistorial] = useState([])

  const loguear = async () => {
    const res = await googleLogin()
    setUser(res)
  }

  // Mantener el estado de la autenticacion al hacer refresh
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        setUser(user)
      }
    })
  }, [])

  const desloguear = () => {
    const res = logout()
    setUser(null)
  }

  return (
    <Router>
      <div>
        <Routes>
          {user && (
            <>
              <Route
                path="/history"
                element={
                  <HistoryScreen
                    desloguear={desloguear}
                    historial={historial}
                  />
                }
              />
              <Route
                path="/search"
                element={
                  <SearchScreen
                    desloguear={desloguear}
                    ciudades={ciudades}
                    setCiudades={setCiudades}
                    setHistorial={setHistorial}
                  />
                }
              />
            </>
          )}
          <Route
            path="/"
            element={
              user ? (
                <SearchScreen
                  desloguear={desloguear}
                  ciudades={ciudades}
                  setHistorial={setHistorial}
                  setCiudades={setCiudades}
                />
              ) : (
                <LoginScreen loguear={loguear} />
              )
            }
            exact
          />
        </Routes>
      </div>
    </Router>
  )
}
