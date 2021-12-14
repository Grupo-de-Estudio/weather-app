import React from 'react'
import ReactDOM from 'react-dom'
import { WeatherApp } from './WeatherApp'
import './scss/main.scss'
import './firebase/config'
import { ContextProvider } from './context/authContext'

ReactDOM.render(
  <ContextProvider>
    <WeatherApp />
  </ContextProvider>,
  document.getElementById('root')
)
