import React, { useState } from 'react'
import { AppRouter } from './router/AppRouter'

export const WeatherApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loguear = () => {
    setIsLoggedIn(true)
  }

  return <AppRouter isLoggedIn={isLoggedIn} loguear={loguear} />
}
