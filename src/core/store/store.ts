import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

import { chartReducer } from '@/app/features/cart/store'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { api } from './api'
import { type AppDispatch, type RootState } from './types'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    chart: chartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
