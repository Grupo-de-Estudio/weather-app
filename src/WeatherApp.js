import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchScreen } from './pages/SearchScreen'
import { HistoryScreen } from './pages/HistoryScreen'
import { LoginScreen } from './pages/LoginScreen'

export const WeatherApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
          <Route
            path="/search"
            element={<SearchScreen desloguear={desloguear} />}
          />
          <Route
            path="/history"
            element={<HistoryScreen desloguear={desloguear} />}
          />
          <Route
            path="/"
            element={
              isLoggedIn ? <SearchScreen /> : <LoginScreen loguear={loguear} />
            }
            exact
          />
        </Routes>
      </div>
    </Router>
  )

  //<AppRouter isLoggedIn={isLoggedIn} loguear={loguear} />
}
