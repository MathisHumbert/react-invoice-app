import axios from 'axios';
import { CLEAR_ALERT, DISPLAY_ALERT } from './actions';

const displayAlert = () => {
  return (dispatch) => dispatch({ type: DISPLAY_ALERT });
};

const clearAlert = () => {
  setTimeout(() => {
    dispatch({ type: CLEAR_ALERT });
  }, 3000);
};
