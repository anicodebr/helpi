import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { listEntregador } from './entregador.reducer';
import { userInfo } from './user.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  listEntregador,
  userInfo,
  alert,
});

export default rootReducer;