import { Routes, Route } from 'react-router-dom'
import AuthRoute, { AuthRouteProps } from '@components/AuthRoute'
import LoginPage from '@/pages/auth/Login'
import HomePage from '@/pages/HomePage'
import Trip from '@/pages/trip'
import RegisterPage from '@/pages/auth/Register'

const routes: (AuthRouteProps & { path: string })[] = [
  { path: '/', children: <HomePage />, gte: 0, lt: 1, redirectTo: 'trip' },
  { path: 'login', children: <LoginPage />, gte: 0, lt: 1, redirectTo: '/' },
  { path: 'register', children: <RegisterPage />, gte: 0, lt: 1, redirectTo: '/' },
  { path: 'trip/*', children: <Trip />, gte: 1, redirectTo: 'login' },
  { path: 'settings', children: <div>settings</div>, gte: 1, redirectTo: 'login' },
]

const RootRouter = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const { path, children, gte, lt, only, redirectTo } = route
        return (
          <Route
            key={`${path}_route`}
            path={path}
            element={
              // <AuthRoute gte={gte} lt={lt} only={only} redirectTo={redirectTo}>
              children
              // </AuthRoute>
            }
          />
        )
      })}
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}

export default RootRouter
