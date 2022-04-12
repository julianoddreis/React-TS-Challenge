import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Loader } from '../../components/Loader'
import { Error } from '../../components/Error'
import { Card } from '../../components/Card'
import { MoviesContainer, Input } from './Search.styles'

import useSearch from '../../hooks/useSearch'

const SearchContent = ({ value }: { value: string }) => {
  const { movies, isLoading, error } = useSearch(value)

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

const Search = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <h1>Search</h1>
      <Input value={value} onChange={({ target }) => setValue(target.value)} />
      <SearchContent value={value} />
    </>
  )
}

export default Search
