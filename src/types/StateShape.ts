export type Error = { [key: string]: any } | null

export type StateShape<T> = {
  payload: T | null
  error: Error
  message: string
  isLoading?: boolean
}
