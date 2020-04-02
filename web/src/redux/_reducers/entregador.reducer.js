import { entregadorConstants } from '../_constants';

// localStorage.removeItem('user');
let user = JSON.parse(localStorage.getItem('id'));
const initialState = user ? { loggedIn: true, user } : {};

export function listEntregador(state = initialState, action) {
  switch (action.type) {
    case entregadorConstants.LISTUSER_REQUEST:
      return {
        submitted: true
      };
    case entregadorConstants.LISTUSER_SUCCESS:
    return {users: action.users};
    case entregadorConstants.LISTUSER_FAILURE:
      return {};
    default:
      return state
  }
}