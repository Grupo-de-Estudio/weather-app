import { signInWithPopup } from '@firebase/auth'
import { db, googleAuthProvider, app, auth } from '../firebase/config'

export const googleLogin = async () => {
  return await signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      return result.user
    })
    .catch((error) => {})
}
export const logout = async () => {
  return await auth
    .signOut()
    .then()
    .catch((error) => {})
}
