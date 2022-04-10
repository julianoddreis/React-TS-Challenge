import { ErrorContainer, Title } from './Error.styles'

interface Props {
  error?: string
}

const Error = (props: Props) => {
  const { error = 'Sorry, something went wrong.' } = props

  return (
    <ErrorContainer>
      <Title>{error}</Title>
    </ErrorContainer>
  )
}

export default Error
