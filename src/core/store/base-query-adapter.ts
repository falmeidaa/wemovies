import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query'

import { type Usecase } from '../domain/usecases'

export const baseQueryAdapter: BaseQueryFn<
  {
    usecase: Usecase
    params?: any
  },
  any
> = async ({ usecase, params }) => {
  try {
    const result = await usecase.execute(params)
    return { data: result }
  } catch (error: any) {
    return {
      error: {
        type: error.name,
        message: error.message,
        error: error.stack
      }
    }
  }
}
