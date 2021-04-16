export type ApiResponse<T = any> = {
  data: T
  message: string
  success: boolean
  status?: number
}
