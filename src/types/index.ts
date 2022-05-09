export type { AuthLevel, AuthLevelCondition, User, Auth } from './auth'
export type { Trip, Member, Role, Destination, TripForm } from './trip'

export type ActionType<T> = {
  type: string
  payload: T
}
