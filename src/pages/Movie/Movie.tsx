import { useParams } from 'react-router-dom'

import { Loader } from '../../components/Loader'
import { Error } from '../../components/Error'
import { MovieContainer, Title, Banner, Description, Date } from './Movie.styles'

import useMovie from '../../hooks/useMovie'
import { getImageUrl } from '../../helpers/image'
import { formatDate } from '../../helpers/date'

const MovieContent = () => {
  const { movieId } = useParams() as { movieId: string }

  const { movie, isLoading, error } = useMovie(movieId)

  if (isLoading) {
    return <Loader />
  }

  if (error || !movie) {
    return <Error />
  }

  return (
    <MovieContainer>
      <Title>{movie.title}</Title>
      <Banner image={getImageUrl(movie.poster_path)} />
      <Description>{movie.overview}</Description>
      <Date>{formatDate(movie.release_date)}</Date>
    </MovieContainer>
  )
}

const Movie = () => {
  return (
    <>
      <h1>Movie</h1>
      <MovieContent />
    </>
  )
}

export default Movie
