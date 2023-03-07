import { createReducer } from '@reduxjs/toolkit'

import {
  addMovie,
  addMovieReducer,
  removeMovie,
  removeMovieReducer,
  resetCart,
  resetCartReducer
} from './actions'
import { CART_REDUCER_INITIAL_STATE } from './types'

export const chartReducer = createReducer(
  CART_REDUCER_INITIAL_STATE,
  (builder) => {
    builder.addCase(addMovie, addMovieReducer)
    builder.addCase(removeMovie, removeMovieReducer)
    builder.addCase(resetCart, resetCartReducer)
  }
)
