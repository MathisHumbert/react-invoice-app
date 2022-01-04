import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';
import formReducer from './formReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  toggleReducer,
  formReducer,
  dataReducer,
});

export default rootReducer;
