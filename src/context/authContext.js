import { createContext, useContext, useState } from 'react'
import { auth } from '../firebase/config'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser)

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

export const useUserContext = () => {
  const userContext = useContext(Context)
  return userContext
}
