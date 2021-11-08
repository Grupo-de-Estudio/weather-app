import React from 'react'
import { Navbar } from './Navbar'
import { SearchHistory } from './SearchHistory'

export const HistoryScreen = ({ desloguear }) => {
  return (
    <>
      <Navbar desloguear={desloguear} />
      <SearchHistory />
    </>
  )
}
