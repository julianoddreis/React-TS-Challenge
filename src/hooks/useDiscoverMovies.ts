import { useEffect, useState } from 'react'
import { getDiscoverMovies } from '../services/movies'
import { Movie } from '../types/movies'

const useDiscoverMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await getDiscoverMovies()
        setMovies(data.results)
      } catch (error) {
        console.log(error)
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return { movies, isLoading, error }
}

export default useDiscoverMovies
