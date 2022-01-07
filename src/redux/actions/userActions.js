import axios from 'axios';
import { CLEAR_ALERT, DISPLAY_ALERT, START_REGISTER } from './actions';

export const displayAlert = () => {
  return (dispatch) => dispatch({ type: DISPLAY_ALERT });
};

export const clearAlert = () => {
  return (dispatch) =>
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
};

export const registerUser = (formUser) => {
  console.log(formUser);
};
