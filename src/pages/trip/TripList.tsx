import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FixedButton, PrimaryOutlineButton, PrimarySolidButton } from '@/components/atoms/buttons'
import TripCard from '@/components/TripCard'
import { useSelector } from '@/lib/hooks'
import { deleteTripList } from '@/modules/trip/tripListReducer'
import { Trip } from '@/types'
import { updateTripForm } from '@/modules/trip/tripFormReducer'
import Header from '@/components/Header'
import Modal from '@components/modals/Modal'
import { FlexCenter, FlexSpaceBetween } from '@/components/atoms/layouts'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
`

const Content = styled(FlexCenter)`
  height: 100px;
`

const ButtonRow = styled(FlexSpaceBetween)`
  gap: 10px;
`

const TripList = () => {
  const { trip_list } = useSelector((state) => state.trip)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedId, setSelectedId] = useState<number | null>(null)

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

  const onDeleteButtonClick = (id: number) => {
    setSelectedId(id)
  }

  const onCancelDelete = () => {
    setSelectedId(null)
  }

  const onDeleteTrip = () => {
    if (selectedId) dispatch(deleteTripList(selectedId))
    setSelectedId(null)
  }

  return (
    <PageGrid>
      <Header title='여행 목록' />
      {trip_list.map((trip) => {
        return (
          <TripCard
            key={trip.id}
            trip={trip}
            onClick={onCardClick}
            onUpdate={onUpdateTrip}
            onDelete={onDeleteButtonClick}
          />
        )
      })}
      <FixedButton onClick={onCreateTrip}>새 여행 추가</FixedButton>
      <Modal isOpen={Boolean(selectedId)} onClose={onCancelDelete}>
        <Content>이 여행을 정말 삭제하시겠습니까?</Content>
        <ButtonRow>
          <PrimaryOutlineButton onClick={onCancelDelete}>아니요</PrimaryOutlineButton>
          <PrimarySolidButton onClick={onDeleteTrip}>예</PrimarySolidButton>
        </ButtonRow>
      </Modal>
    </PageGrid>
  )
}

export default TripList
