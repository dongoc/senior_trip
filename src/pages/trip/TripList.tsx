import { Heading2 } from '@/components/atoms/typographies'
import TripCard from '@/components/TripCard'
import { useNavigate } from 'react-router-dom'

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const TripList = () => {
  const navigate = useNavigate()

  const onCardClick = (id: number) => {
    console.log(id)
    navigate(`${id}`)
  }

  return (
    <div>
      <Heading2>TripList</Heading2>
      {list.map((trip) => {
        return <TripCard key={trip} id={trip} onClick={onCardClick} />
      })}
    </div>
  )
}

export default TripList
