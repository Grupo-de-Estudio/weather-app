import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '../pages/Navbar'
import { HistoryScreen } from '../pages/HistoryScreen'
import { SearchScreen } from '../pages/SearchScreen'
import { LoginScreen } from '../pages/LoginScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/search" element={<SearchScreen />} />
          <Route exact path="/history" element={<HistoryScreen />} />
        </Routes>
      </div>
    </Router>
  )
}
