import { Routes, Route, RouteProps } from 'react-router-dom'
import AuthRoute, { AuthRouteProps } from '@components/AuthRoute'

const routes: (AuthRouteProps & { path: string })[] = [
  { path: '/', children: <div>Home</div>, gte: 0, redirectTo: '/' },
  { path: 'login', children: <div>login</div>, gte: 0, lt: 1, redirectTo: '/' },
  { path: 'register', children: <div>register</div>, gte: 0, lt: 1, redirectTo: '/' },
  { path: 'trip', children: <div>trip</div>, gte: 1, redirectTo: '/login' },
  { path: 'settings', children: <div>settings</div>, gte: 1, redirectTo: '/login' },
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
              <AuthRoute gte={gte} lt={lt} only={only} redirectTo={redirectTo}>
                {children}
              </AuthRoute>
            }
          />
        )
      })}
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}

export default RootRouter
