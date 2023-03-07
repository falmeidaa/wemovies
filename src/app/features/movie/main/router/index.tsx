import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import { ROUTE_PATHS } from '@/main/types'

const MovieList = lazy(
  async () => import('../../presentation/pages/movie-list/movie-list')
)

export const movieRoutes: RouteObject[] = [
  {
    path: ROUTE_PATHS.MOVIE_LIST,
    element: <MovieList />
  }
]
