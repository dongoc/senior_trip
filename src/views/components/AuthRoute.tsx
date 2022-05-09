import { AuthLevel, AuthLevelCondition } from '@types'
import { Route, RouteProps, Navigate } from 'react-router-dom'

type IsPassableAuthLevelProps = AuthLevelCondition & {
  auth_level: AuthLevel
}

export const isPassableAuthLevel = (props: IsPassableAuthLevelProps): boolean => {
  const { auth_level, gte, lt, only } = props
  return true
}

type AuthRouteProps = RouteProps &
  AuthLevelCondition & {
    redirectTo: string
  }

const AuthRoute = (props: AuthRouteProps) => {
  const { path, element, gte, lt, only, redirectTo } = props
  const authLevel = 0
  const passed = isPassableAuthLevel({
    auth_level: authLevel,
    gte,
    lt,
    only,
  })
  return passed ? <Route path={path} element={element} /> : <Navigate to={redirectTo} replace />
}

export default AuthRoute
