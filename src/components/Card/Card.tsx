import { CardContainer, CardImage } from './Card.styles'

interface CardProps {
  image: string
  name: any
  homePort: any
  roles: any
}

const Card = (props: CardProps) => {
  const { image, name, homePort, roles } = props
  return (
    <CardContainer>
      <CardImage image={image} />
      <h1>{name}</h1>
      <h2>{homePort}</h2>
      <ul>
        {roles.map((role: any) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </CardContainer>
  )
}

export default Card
