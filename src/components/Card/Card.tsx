import { CardContainer, CardImage, Title, Date, Average } from './Card.styles'
import { getImageUrl } from '../../helpers/image'
import { formatDate } from '../../helpers/date'

interface CardProps {
  title: any
  image: string
  date: string
  average: number
}

const Card = (props: CardProps) => {
  const { title, image, date, average } = props
  return (
    <CardContainer>
      <CardImage image={getImageUrl(image)} />
      <Title>{title}</Title>
      <Date>{formatDate(date)}</Date>
      <Average>{average}</Average>
    </CardContainer>
  )
}

export default Card
