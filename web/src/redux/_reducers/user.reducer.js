import { userConstants } from '../_constants';

// localStorage.removeItem('user');
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function updateUser(state = initialState, action) {
  switch (action.type) {
    case userConstants.UPDATE_USER_REQUEST:
      return {};
    case userConstants.UPDATE_USER_SUCCESS:
      return {};
    case userConstants.UPDATE_USER_FAILURE:
      return {};
    default:
      return state
  }
}