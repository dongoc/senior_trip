import { withRender } from '@/lib/withRender'
import { initializeTripDetail } from '@/modules/trip/tripDetailReducer'
import { useMatch } from 'react-router-dom'

const TripDetail = () => {
  const match = useMatch('/trip/:trip_id')
  const tripId = match?.params?.trip_id

  return <div>TripDetail {tripId}</div>
}

export default withRender(TripDetail, initializeTripDetail)
