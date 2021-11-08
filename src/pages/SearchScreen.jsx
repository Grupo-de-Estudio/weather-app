import React from 'react'
import { Navbar } from './Navbar'
import { Searchbar } from './Searchbar'
import { SingleCard } from './SingleCard'

export const SearchScreen = ({ desloguear }) => {
  return (
    <>
      <Navbar desloguear={desloguear} />
      <Searchbar />
      <SingleCard />
    </>
  )
}
