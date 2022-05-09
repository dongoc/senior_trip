export type { AuthLevel, AuthLevelCondition, User, Auth } from './auth'
export type { Trip, Member, Role } from './trip'

export type ActionType<T> = {
  type: string
  payload: T
}
