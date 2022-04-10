import { Movie } from '../types/movies'
import api from './api'

interface DiscoverMoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
export const getDiscoverMovies = () => api.get<DiscoverMoviesResponse>('discover/movie')
