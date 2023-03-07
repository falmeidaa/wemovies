import { useSelector } from '@/app/shared/hooks'
import { useAppDispatch } from '@/core/store'

import { type MovieModel } from '../../movie/domain/models'
import { addMovie, removeMovie, resetCart } from '../store'

type MappedMovie = MovieModel & { quantity: number; subTotal: number }

export const useCartHandler = () => {
  const { addedMovies } = useSelector.Cart()
  const dispatch = useAppDispatch()

  const quantity = addedMovies.length

  const differentMovies = addedMovies.reduce<MappedMovie[]>((acc, movie) => {
    const movieExists = acc.find(({ id }) => id === movie.id)
    if (movieExists) {
      movieExists.quantity += 1
      movieExists.subTotal += movie.price
    } else {
      acc.push({ ...movie, quantity: 1, subTotal: movie.price })
    }
    return acc
  }, [])

  const total = differentMovies.reduce((acc, { subTotal }) => acc + subTotal, 0)

  const movieQuantity = (movie: MovieModel) => {
    return addedMovies.filter(({ id }) => id === movie.id)?.length ?? 0
  }

  const addMovieToCart = (movie: MovieModel) => {
    dispatch(addMovie(movie))
  }

  const decreaseMovieFromCart = (movie: MovieModel) => {
    dispatch(removeMovie(movie))
  }

  const removeMovieFromCart = (movie: MovieModel) => {
    const quantity = movieQuantity(movie)
    if (quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        dispatch(removeMovie(movie))
      }
    }
  }

  const handleResetCart = () => {
    dispatch(resetCart())
  }

  return {
    quantity,
    differentMovies,
    total,
    movieQuantity,
    addMovieToCart,
    decreaseMovieFromCart,
    resetCart: handleResetCart,
    removeMovieFromCart
  }
}
