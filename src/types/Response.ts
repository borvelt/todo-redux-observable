import { Error } from './StateShape'

export type ApiResponse<T = any> = {
  data: T
  message: string
  error: Error
  status?: number
}

export type ValidationResponse<T = any> = Omit<
  ApiResponse<T>,
  'status' | 'success'
>
