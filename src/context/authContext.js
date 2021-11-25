import { createContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { auth } from '../firebase/config'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser)
  console.log(user)

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}
