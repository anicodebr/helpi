import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { userInfo } from './user.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  //Login
  authentication,
  // Cadastro de Usuários
  userInfo,
  alert,
});

export default rootReducer;