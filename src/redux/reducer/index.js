import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';

const rootReducer = combineReducers({
  toggleReducer,
});

export default rootReducer;
