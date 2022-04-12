import { useEffect, useState } from 'react'
import { searchMovies } from '../services/movies'
import { Movie } from '../types/movies'

import useDebounce from './useDebounce'

const useSearch = (value: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState<Error | null>(null)

  const debouncedValue = useDebounce(value, 500)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        const { data } = await searchMovies(debouncedValue)
        setMovies(data.results)
      } catch (error) {
        console.log(error)
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    if (debouncedValue) {
      fetchMovies()
    } else {
      setMovies([])
      setIsLoading(false)
    }
  }, [debouncedValue])

  return { movies, isLoading, error }
}

export default useSearch
