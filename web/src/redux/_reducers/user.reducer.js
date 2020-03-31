import { userConstants } from '../_constants';

// localStorage.removeItem('user');
let user = JSON.parse(localStorage.getItem('id'));
const initialState = user ? { loggedIn: true, user } : {};

export function userInfo(state = initialState, action) {
  switch (action.type) {
    case userConstants.UPDATE_USER_REQUEST:
      return {};
    case userConstants.UPDATE_USER_SUCCESS:
      return {};
    case userConstants.UPDATE_USER_FAILURE:
      return {};
    case userConstants.LISTUSER_REQUEST:
      return {
        submitted: true
      };
    case userConstants.LISTUSER_SUCCESS:
    return {users: action.users};
    case userConstants.LISTUSER_FAILURE:
      return {};
    default:
      return state
  }
}