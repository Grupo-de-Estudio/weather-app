import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HistoryScreen } from '../pages/HistoryScreen'

import { LoginScreen } from '../pages/LoginScreen'

import { SearchScreen } from '../pages/SearchScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/" element={<SearchScreen />} />
        </Routes>
      </div>
    </Router>
  )
}
