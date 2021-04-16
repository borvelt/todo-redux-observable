export type StateShape<T> = {
  payload: T | null
  error: boolean
  message: string
  isLoading?: boolean
}
