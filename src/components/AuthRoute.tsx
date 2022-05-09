import { AuthLevel, AuthLevelCondition } from '@types'
import { Navigate } from 'react-router-dom'
import { useSelector } from '@hooks/useSelector'
import { ReactElement } from 'react'

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

export type AuthRouteProps = AuthLevelCondition & {
  children: ReactElement | null
  redirectTo: string
}

const AuthRoute = (props: AuthRouteProps) => {
  const { children, gte, lt, only, redirectTo } = props
  const { auth_level } = useSelector((state) => state.auth)
  const passed = isPassableAuthLevel({ auth_level, gte, lt, only })
  return passed ? children : <Navigate to={redirectTo} replace />
}

export default AuthRoute
