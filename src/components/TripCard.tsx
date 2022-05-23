import { MouseEvent } from 'react'
import styled from 'styled-components'
import { formatDateString, getDiffDate } from '@/lib/dateHelper'
import { Trip } from '@/types'
import { TextButton } from '@/components/atoms/buttons'

const Card = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 20px 20px 10px 20px;
  border-radius: 8px;
  background-color: var(--color-card-background);
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.15);
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonDivider = styled.div`
  width: 1px;
  height: 26px;
  background-color: var(--color-disabled);
`

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
    <Card onClick={() => onClick(id)}>
      <CardContent>
        <div>{title}</div>
        <div>{tripRange}</div>
        <div>총 {members.length} 명</div>
      </CardContent>
      <CardActions>
        <TextButton variant='dimmed' onClick={_onUpdate}>
          수정
        </TextButton>
        <ButtonDivider />
        <TextButton variant='warning' onClick={_onDelete}>
          삭제
        </TextButton>
      </CardActions>
    </Card>
  )
}

export default TripCard
