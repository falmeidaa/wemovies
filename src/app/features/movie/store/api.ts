import { api } from '@/core/store/api'

import { loadMovieListService } from '../application/services'
import { type LoadMovieList } from '../domain/usecases'

export const movieApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loadMovieList: builder.query<LoadMovieList.Output, LoadMovieList.Input>({
      query: (params) => ({
        usecase: loadMovieListService,
        params
      })
    })
  })
})
