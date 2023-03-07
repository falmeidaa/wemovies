import { type Usecase } from '@/core/domain/usecases'

import { type MovieModel } from '../models'

export interface LoadMovieList
  extends Usecase<LoadMovieList.Output, LoadMovieList.Input> {}

export namespace LoadMovieList {
  export type Input = void
  export type Output = MovieModel[]
}
