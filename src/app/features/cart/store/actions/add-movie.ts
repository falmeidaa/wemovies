import { type MovieModel } from '@/app/features/movie/domain/models'
import {
  type ActionCreatorPayload,
  type ReducerFunction
} from '@/core/store/types'
import { createAction } from '@reduxjs/toolkit'

import { type CartState, CART_REDUCER_ACTIONS } from '../types'

export const addMovie: ActionCreatorPayload<MovieModel> = createAction(
  CART_REDUCER_ACTIONS.ADD_MOVIE
)

export const addMovieReducer: ReducerFunction<CartState, MovieModel> = (
  state,
  action
) => {
  state.addedMovies.push(action.payload)
  return state
}
