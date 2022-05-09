export type TripCardProps = {
  id: number
  onClick(id: number): void
}

const TripCard = (props: TripCardProps) => {
  const { id, onClick } = props

  return <div onClick={() => onClick(id)}>{`TripCard ${id}`}</div>
}

export default TripCard
