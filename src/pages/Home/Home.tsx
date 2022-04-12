import { Link } from 'react-router-dom'

import { Card } from '../../components/Card'
import { Loader } from '../../components/Loader'
import { Error } from '../../components/Error'

import { MoviesContainer } from './Home.styles'

import useDiscoverMovies from '../../hooks/useDiscoverMovies'

const MoviesList = () => {
  const { movies, isLoading, error } = useDiscoverMovies()

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  return (
    <MoviesContainer>
      {movies?.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <Card
            title={movie.title}
            image={movie.backdrop_path}
            date={movie.release_date}
            average={movie.vote_average}
          />
        </Link>
      ))}
    </MoviesContainer>
  )
}

const Home = () => {
  return (
    <>
      <h1>Discover movies</h1>
      <MoviesList />
    </>
  )
}

export default Home
