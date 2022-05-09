import TripDetail from '@/pages/trip/TripDetail'
import TripForm from '@/pages/trip/TripForm'
import TripList from '@/pages/trip/TripList'
import { Route, Routes } from 'react-router-dom'

const Trip = () => {
  return (
    <Routes>
      <Route index element={<TripList />} />
      <Route path=':trip_id' element={<TripDetail />} />
      <Route path='new' element={<TripForm />} />
    </Routes>
  )
}

export default Trip
