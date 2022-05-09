import { useMatch, useNavigate } from 'react-router-dom'
import { useSelector } from '@/lib/hooks'
import { withRender } from '@/lib/withRender'
import { resetTripForm, submitTripForm, updateTripForm } from '@/modules/trip/tripFormReducer'
import { MouseEvent, ChangeEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTripList } from '@/modules/trip/tripListReducer'

const TripForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const match = useMatch('/trip/:type')
  const type = match?.params?.type === 'new' ? 'create' : 'update'
  const { id, title, members, start_date, end_date } = useSelector((state) => state.trip.trip_form)

  const onInputChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target
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
    <div>
      <div>TripForm</div>
      <form onChange={onInputChange} onSubmit={onSubmit}>
        <div>{id}</div>
        <input name='title' defaultValue={title} />
        <div>{members.map((member) => member.name)}</div>
        <button type='submit'>TripForm</button>
      </form>
    </div>
  )
}

export default withRender(TripForm, null, null)
