import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HistoryScreen } from '../pages/HistoryScreen'
import { LoginScreen } from '../pages/LoginScreen'
import { SearchScreen } from '../pages/SearchScreen'

export const AppRouter = ({ isLoggedIn, loguear }) => {
  return (
    <Router>
      <div>
        <Routes>
          {isLoggedIn ? (
            ((<Route path="/search" element={<SearchScreen />} />),
            (<Route path="/history" element={<HistoryScreen />} />),
            (<Route path="/" element={<SearchScreen />} />))
          ) : (
            <Route path="/login" element={<LoginScreen loguear={loguear} />} />
          )}

          {/* <Route path="/login" element={<LoginScreen loguear={loguear} />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/" element={<SearchScreen />} /> */}
        </Routes>
      </div>
    </Router>
  )
}
