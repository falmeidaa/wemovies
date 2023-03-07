import { type MovieModel } from '@/app/features/movie/domain/models'
import {
  type ActionCreatorPayload,
  type ReducerFunction
} from '@/core/store/types'
import { createAction } from '@reduxjs/toolkit'

import { type CartState, CART_REDUCER_ACTIONS } from '../types'

export const removeMovie: ActionCreatorPayload<MovieModel> = createAction(
  CART_REDUCER_ACTIONS.REMOVE_MOVIE
)

export const removeMovieReducer: ReducerFunction<CartState, MovieModel> = (
  state,
  action
) => {
  const movie = action.payload
  const movieIndex = state.addedMovies.findIndex(({ id }) => id === movie.id)
  if (movieIndex !== -1) state.addedMovies.splice(movieIndex, 1)
  return state
}
