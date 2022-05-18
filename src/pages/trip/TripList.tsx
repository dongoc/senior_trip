import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FixedButton } from '@/components/atoms/buttons'
import { Headline2 } from '@/components/atoms/typographies'
import TripCard from '@/components/TripCard'
import { useSelector } from '@/lib/hooks'
import { deleteTripList } from '@/modules/trip/tripListReducer'
import { Trip } from '@/types'
import { updateTripForm } from '@/modules/trip/tripFormReducer'

const TripList = () => {
  const { trip_list } = useSelector((state) => state.trip)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCardClick = (id: number) => {
    navigate(`${id}`)
  }

  const onCreateTrip = () => {
    navigate('new')
  }

  const onUpdateTrip = (trip: Trip) => {
    dispatch(updateTripForm(trip))
    navigate('update')
  }

  const onDeleteTrip = (id: number) => {
    dispatch(deleteTripList(id))
  }

  return (
    <div>
      <Headline2>TripList</Headline2>
      {trip_list.map((trip) => {
        return (
          <TripCard key={trip.id} trip={trip} onClick={onCardClick} onUpdate={onUpdateTrip} onDelete={onDeleteTrip} />
        )
      })}
      <FixedButton onClick={onCreateTrip}>새 여행 추가하기</FixedButton>
    </div>
  )
}

export default TripList
