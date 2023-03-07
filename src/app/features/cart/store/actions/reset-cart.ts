import { type ReducerFunction } from '@/core/store/types'
import { createAction } from '@reduxjs/toolkit'

import {
  CART_REDUCER_ACTIONS,
  CART_REDUCER_INITIAL_STATE,
  type CartState
} from '../types'

export const resetCart = createAction(CART_REDUCER_ACTIONS.RESET_CART)

export const resetCartReducer: ReducerFunction<CartState> = (state, action) => {
  state.addedMovies = CART_REDUCER_INITIAL_STATE.addedMovies
  return state
}
