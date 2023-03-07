import { type MovieModel } from '../../movie/domain/models'

export const CART_REDUCER_ACTIONS = {
  ADD_MOVIE: `@cart/addMovie`,
  REMOVE_MOVIE: `@cart/removeMovie`,
  RESET_CART: `@cart/resetCart`
} as const

export const CART_REDUCER_INITIAL_STATE: CartState = {
  addedMovies: []
}

export type CartState = {
  addedMovies: MovieModel[]
}
