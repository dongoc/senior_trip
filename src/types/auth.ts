const AUTH_LEVEL = {
  0: 'NOT_LOGGED_IN',
  1: 'LOGGED_IN',
}

export type AuthLevel = keyof typeof AUTH_LEVEL

export type AuthLevelCondition = {
  gte?: number
  lt?: number
  only?: number
}

export type User = {
  username: string
  email: string
}

export type Auth = {
  auth_level: AuthLevel
  profile: User
}
