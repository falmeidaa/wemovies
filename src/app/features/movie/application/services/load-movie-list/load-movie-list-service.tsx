import { HttpMethod, type HttpClient } from '@/core/application/protocols'

import { type MovieModel } from '../../../domain/models'
import { type LoadMovieList } from '../../../domain/usecases'

export class LoadMovieListService implements LoadMovieList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<
      LoadMovieListService.Output,
      LoadMovieList.Input
    >
  ) {}

  async execute(): Promise<LoadMovieList.Output> {
    const { body, statusCode } = await this.httpClient.request({
      method: HttpMethod.GET,
      url: this.url
    })

    if (statusCode >= 200 && statusCode < 300) {
      return this.formatResponse(body)
    }
    throw new Error('Load movie list failed')
  }

  private readonly formatResponse = (
    input: LoadMovieListService.Output
  ): LoadMovieList.Output => {
    return input.products.map((product) => ({
      ...product,
      imageUrl: product.image
    }))
  }
}

export namespace LoadMovieListService {
  export type Input = LoadMovieList.Input
  export type Output = {
    products: Array<Omit<MovieModel, 'imageUrl'> & { image: string }>
  }
}
