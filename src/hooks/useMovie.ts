import { useEffect, useState } from 'react'
import { getMovieById } from '../services/movies'
import { Movie } from '../types/movies'

const useMovie = (movieId: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<Movie | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieById(movieId)
        setMovie(data)
      } catch (error) {
        console.log(error)
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
  }, [movieId])

  return { movie, isLoading, error }
}

export default useMovie
