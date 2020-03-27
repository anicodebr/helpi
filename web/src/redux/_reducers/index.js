import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { updateUser } from './user.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  //Login
  authentication,
  // Cadastro de Usuários
  updateUser,
  alert,
});

export default rootReducer;