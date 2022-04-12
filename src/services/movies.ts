import { Movie } from '../types/movies'
import api from './api'

interface MoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export const getDiscoverMovies = () => api.get<MoviesResponse>('discover/movie')

export const getMovieById = (movieId: string) => api.get<Movie>(`/movie/${movieId}`)

export const searchMovies = (query: string) => api.get<MoviesResponse>(`/search/movie?query=${query}`)
