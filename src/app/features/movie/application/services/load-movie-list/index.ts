import { httpClient } from '@/core/infra/http-client'

import { MOVIE_API_ROUTES } from '../../api/movie-api-routes'
import { LoadMovieListService } from './load-movie-list-service'

export const loadMovieListService = new LoadMovieListService(
  MOVIE_API_ROUTES.MOVIE,
  httpClient
)
