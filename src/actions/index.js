import {
  CHANGE_AUTH
} from './types'

export const authenticate = (isLoggedIn) => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn
})
