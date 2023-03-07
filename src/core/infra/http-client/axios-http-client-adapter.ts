import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

import {
  type HttpClient,
  type HttpRequest,
  type HttpResponse
} from '../../application/protocols'

export class AxiosHttpClientAdapter implements HttpClient {
  private readonly axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.API_URL
    })
  }

  async request({
    method,
    url,
    body,
    headers,
    queryParams
  }: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url,
        method,
        data: body,
        headers,
        params: queryParams
      })
    } catch (error: any) {
      axiosResponse = error?.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
