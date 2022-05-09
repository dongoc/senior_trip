import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()

export const signup = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = userCredential
  } catch (error: unknown) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
  }
}

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = userCredential
  } catch (error: unknown) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
  }
}
