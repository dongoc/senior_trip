import { MouseEvent } from 'react'
import { formatDateString, getDiffDate } from '@/lib/dateHelper'
import { Trip } from '@/types'
import { Card, CardContent, CardActions } from '@mui/material'

export type TripCardProps = {
  trip: Trip
  onClick(id: number): void
  onDelete(id: number): void
  onUpdate(trip: Trip): void
}

const TripCard = (props: TripCardProps) => {
  const { trip, onClick, onUpdate, onDelete } = props
  const { id, title, members, start_date, end_date } = trip

  const _onUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onUpdate(trip)
  }

  const _onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onDelete(id)
  }

  const tripRange = `${formatDateString(start_date)} ~ ${formatDateString(end_date)} (${getDiffDate(
    new Date(start_date),
    new Date(end_date)
  )}일)`

  return (
    <Card variant='outlined' onClick={() => onClick(id)}>
      <CardContent>
        <div>{title}</div>
        <div>{tripRange}</div>
        <div>{members.length} 명</div>
      </CardContent>
      <CardActions>
        <button>더보기</button>
        <button onClick={_onUpdate}>수정하기</button>
        <button onClick={_onDelete}>삭제하기</button>
      </CardActions>
    </Card>
  )
}

export default TripCard
