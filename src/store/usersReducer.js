import { CgUserList } from 'react-icons/cg'
import { USER_TYPES } from './userType'

export const usersReducer = (state, action) => {
	switch (action.type) {
		case USER_TYPES.GET:
			return {
				...state,
				users: action.payload,
			}
    case USER_TYPES.LOGIN:
      console.log(action.payload)
      const emailExist = state.users.find(user => user.user.email === action.payload)
      
      if (emailExist) {
        return {
          ...state,
          user: emailExist.user,
          error: null
        }
      }

      return {
        ...state,
        user: null,
        error: 'Usuario o contraseña invalidos'
      }
    case USER_TYPES.UPDATEUSER:

      console.log(action.payload)

      return {
        ...state,
        user: action.payload
      }


		default:
			return state
	}
}
