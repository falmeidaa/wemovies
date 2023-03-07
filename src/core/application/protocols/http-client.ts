export interface HttpClient<Output = any, Input = any> {
  request: (input: HttpRequest<Input>) => Promise<HttpResponse<Output>>
}

export type HttpRequest<T = any> = {
  body?: T
  headers?: Record<string, string>
  queryParams?: Record<string, string>
  method: HttpMethod
  url: string
}

export type HttpResponse<T = any> = {
  body: T
  statusCode: HttpStatusCode
}

export enum HttpMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT'
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR = 500
}
