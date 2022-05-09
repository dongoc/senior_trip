export type Role = 'manager' | 'member'

export type Member = {
  name?: string
  role?: Role
}

export type Destination = {
  country: string
  cities: string[]
}

export type Trip = {
  id: number
  title: string
  thumbnail_img?: string
  start_date: string
  end_date: string
  destinations?: Destination[]
  members: Member[]
}

export type TripForm = Trip
