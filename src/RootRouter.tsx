import { Routes, Route } from 'react-router-dom'
import AuthRoute from '@components/AuthRoute'

const RootRouter = () => {
  return (
    <Routes>
      <AuthRoute path='/' element={<div>Home</div>} gte={0} redirectTo='/' />
      <AuthRoute path='login' element={<div>Login</div>} gte={0} lt={1} redirectTo='/' />
      <AuthRoute path='register' element={<div>Register</div>} gte={0} lt={1} redirectTo='/' />
      <AuthRoute path='trip' element={<div>Trip</div>} gte={1} redirectTo='/login' />
      <AuthRoute path='settings' element={<div>Profile</div>} gte={1} redirectTo='/login' />
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}

export default RootRouter
