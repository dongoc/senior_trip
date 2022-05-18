import { ActionType, Auth, AuthLevel, User } from '@types'

const initialAuthState: Auth = {
  auth_level: 0,
  profile: {
    username: '',
    email: '',
  },
}

export const SET_AUTH_LEVEL = '@@auth/SET_AUTH_LEVEL'

export const setAuthLevel = (auth_level: AuthLevel) => ({
  type: SET_AUTH_LEVEL,
  payload: auth_level,
})

export const auth = (state: Auth = initialAuthState, action: ActionType<Auth>) => {
  switch (action.type) {
    case SET_AUTH_LEVEL:
      return { ...state, auth_level: action.payload }
    default:
      return state
  }
}
