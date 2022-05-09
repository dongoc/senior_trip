import { collection, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { Trip } from '@types'

export const createTrip = async (trip: Trip) => {
  try {
    const docRef = await addDoc(collection(db, 'trips'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const getTrips = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'trips'))
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
  } catch (e) {
    console.error(e)
  }
}

export const updateTrip = async () => {}

export const deleteTrip = async () => {}
