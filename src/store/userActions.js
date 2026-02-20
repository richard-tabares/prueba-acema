import { USER_TYPES } from "./userType";

export const getUsers = (users) => ({
    
    type: USER_TYPES.GET,
    payload: users

})
export const loginUser = (user) => ({
    
    type: USER_TYPES.LOGIN,
    payload: user

})
export const updateUser = (user) => ({
    
    type: USER_TYPES.UPDATEUSER,
    payload: user

})
