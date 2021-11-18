import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchScreen } from './pages/SearchScreen'
import { HistoryScreen } from './pages/HistoryScreen'
import { LoginScreen } from './pages/LoginScreen'

export const WeatherApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [ciudades, setCiudades] = useState([])
  const [historial, setHistorial] = useState([])

  const loguear = () => {
    setIsLoggedIn(true)
  }
  const desloguear = () => {
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <div>
        <Routes>
          {isLoggedIn && (
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
              isLoggedIn ? (
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
