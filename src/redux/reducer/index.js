import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  toggleReducer,
  formReducer,
});

export default rootReducer;
