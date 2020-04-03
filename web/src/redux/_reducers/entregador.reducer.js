import { entregadorConstants } from '../_constants';

// localStorage.removeItem('user');
let user = JSON.parse(localStorage.getItem('id'));
const initialState = user ? { loggedIn: true, user } : {};

export function listEntregador(state = initialState, action) {
  switch (action.type) {
    case entregadorConstants.LIST_ENTREGADOR_REQUEST:
      return {
        submitted: true
      };
    case entregadorConstants.LIST_ENTREGADOR_SUCCESS:
    return {users: action.users};
    case entregadorConstants.LIST_ENTREGADOR_FAILURE:
      return {};
      
    case entregadorConstants.GET_ENTREGADOR_REQUEST:
      return {
        submitted: true
      };
    case entregadorConstants.GET_ENTREGADOR_SUCCESS:
    return {entregador: action.entregador};
    case entregadorConstants.GET_ENTREGADOR_FAILURE:
      return {};
    default:
      return state
  }
}