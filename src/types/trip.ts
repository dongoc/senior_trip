export type Role = 'manager' | 'member'

export type Member = {
  name?: string
  role?: Role
}

export type Trip = {
  id: string | number
  title: string
  thumbnail_img?: string
  start_date: string
  end_date: string
  destinations?: unknown
  members: Member[]
  user_id: string | number
}
