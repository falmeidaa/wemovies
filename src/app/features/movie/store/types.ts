export const MOVIE_REDUCER_ACTIONS = {
  AUTH_STATE_CLEARED: `@auth/authStateCleared`,
  USER_AUTHENTICATED: `@auth/userAuthenticated`
} as const

export const AUTH_REDUCER_INITIAL_STATE: AuthState = {
  isAuthenticated: false
}

export type AuthState = {
  isAuthenticated: boolean
}
