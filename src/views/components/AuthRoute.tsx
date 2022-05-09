import { AuthLevel, AuthLevelCondition } from '@types'
import { Route, RouteProps, Navigate } from 'react-router-dom'
import { useSelector } from '@hooks/index'

type IsPassableAuthLevelProps = AuthLevelCondition & {
  auth_level: AuthLevel
}

export const isPassableAuthLevel = (props: IsPassableAuthLevelProps): boolean => {
  const { auth_level, gte, lt, only } = props
  if (only) return auth_level === only
  if (lt && auth_level >= lt) return false
  if (gte && auth_level < gte) return false
  return true
}

type AuthRouteProps = RouteProps &
  AuthLevelCondition & {
    redirectTo: string
  }

const AuthRoute = (props: AuthRouteProps) => {
  const { path, element, gte, lt, only, redirectTo } = props
  const { auth_level } = useSelector((state) => state.auth)
  // const passed = isPassableAuthLevel({ auth_level, gte, lt, only })
  const passed = true
  return passed ? <Route path={path} element={element} /> : <Navigate to={redirectTo} replace />
}

export default AuthRoute
