import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchScreen } from './pages/SearchScreen'
import { HistoryScreen } from './pages/HistoryScreen'
import { LoginScreen } from './pages/LoginScreen'
import { googleLogin, logout } from './actions/auth'
import { Context } from './context/authContext'
import { auth, colRef } from './firebase/config'
import { addDoc } from '@firebase/firestore'

export const WeatherApp = () => {
  const { user, setUser } = useContext(Context)
  const [ciudades, setCiudades] = useState([])
  const [historial, setHistorial] = useState([])

  const loguear = async () => {
    const res = await googleLogin()
    setUser(res)
  }

  const desloguear = () => {
    const res = logout()
    setUser(null)
  }

  // Mantener el estado de la autenticacion al hacer refresh
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        setUser(user)
      }
    })
  }, [])

  // Subir datos del historial a firebase

  const subirDatos = () => {
    let anio = historial[0].fecha.getFullYear()
    let diaNumero = historial[0].fecha.getDate()
    let diaSemana = historial[0].fecha.getDay()
    let mes = historial[0].fecha.getMonth()

    if (mes == 0) mes = 'Enero'
    if (mes == 1) mes = 'Febrero'
    if (mes == 2) mes = 'Marzo'
    if (mes == 3) mes = 'Abril'
    if (mes == 4) mes = 'Mayo'
    if (mes == 5) mes = 'Junio'
    if (mes == 6) mes = 'Julio'
    if (mes == 7) mes = 'Agosto'
    if (mes == 8) mes = 'Septiembre'
    if (mes == 9) mes = 'Octubre'
    if (mes == 10) mes = 'Noviembre'
    if (mes == 11) mes = 'Diciembre'

    if (diaSemana == 0) diaSemana = 'Domingo'
    if (diaSemana == 1) diaSemana = 'Lunes'
    if (diaSemana == 2) diaSemana = 'Martes'
    if (diaSemana == 3) diaSemana = 'Miercoles'
    if (diaSemana == 4) diaSemana = 'Jueves'
    if (diaSemana == 5) diaSemana = 'Viernes'
    if (diaSemana == 6) diaSemana = 'Sabado'

    let hora = historial[0].fecha.getHours()
    if (hora <= 9) hora = `0${hora}`

    let minutos = historial[0].fecha.getMinutes()
    if (minutos <= 9) minutos = `0${minutos}`

    let segundos = historial[0].fecha.getSeconds()
    if (segundos <= 9) segundos = `0${segundos}`

    let ciudad = historial[0].nombre.trim()

    const cargarHistorial = {
      ciudad: ciudad,
      dia: diaSemana,
      fecha: diaNumero,
      mes: mes,
      anio: anio,
      hora: hora,
      minutos: minutos,
      segundos: segundos,
      uid: user?.uid ? user.uid : 'cargando',
    }

    addDoc(colRef, cargarHistorial)
  }

  useEffect(() => {
    if (historial.length == 0) {
      return
    } else {
      subirDatos()
    }
  }, [historial])

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
                    subirDatos={subirDatos}
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
                  subirDatos={subirDatos}
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
