import { useMatch, useNavigate } from 'react-router-dom'
import { useSelector } from '@/lib/hooks'
import { withRender } from '@/lib/withRender'
import { resetTripForm, submitTripForm, updateTripForm } from '@/modules/trip/tripFormReducer'
import { MouseEvent, ChangeEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTripList } from '@/modules/trip/tripListReducer'
import { FixedButton } from '@/components/atoms/buttons'
import { TextField } from '@mui/material'
import DateRangePicker from '@/components/inputs/DateRangePicker'
import styled from 'styled-components'
import Header from '@/components/Header'

const FormGrid = styled.form``

const TripForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const match = useMatch('/trip/:type')
  const type = match?.params?.type === 'new' ? 'create' : 'update'
  const { id, title, members, start_date, end_date } = useSelector((state) => state.trip.trip_form)

  const onInputChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target
    console.log({ [name]: value })
    dispatch(updateTripForm({ [name]: value }))
  }

  const onSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (type === 'update') dispatch(submitTripForm())
  }

  useEffect(() => {
    if (type === 'update' && id < 0) navigate('/trip')
  }, [])

  return (
    <FormGrid onChange={onInputChange} onSubmit={onSubmit}>
      <Header title='여행 추가' hasBackButton />
      <TextField label='여행 제목' name='title' defaultValue={title} variant='standard' sx={{ width: '100%' }} />
      {/* <DateRangePicker /> */}
      <div>{members.map((member) => member.name)}</div>
      <FixedButton type='submit'>새 여행 추가하기</FixedButton>
    </FormGrid>
  )
}

export default withRender(TripForm, null, null)
