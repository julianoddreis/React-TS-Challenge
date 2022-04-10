export interface Movie {
  id: number
  title: string
  overview: string
  release_date: string
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_title: string
  popularity: number
  poster_path: string
  video: boolean
  vote_average: number
  vote_count: number
}
