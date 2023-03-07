import { useLoadMovieListQuery } from '../../../store/hooks'
import { MovieItem } from '../../components'
import { Container } from './movie-list-styles'

const MovieList = () => {
  const { data } = useLoadMovieListQuery()

  return (
    <Container>
      {data?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Container>
  )
}

export default MovieList
