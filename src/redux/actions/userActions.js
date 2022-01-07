import axios from 'axios';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  ERROR_REGISTER,
  REGISTER_USER,
  START_REGISTER,
} from './actions';

export const displayAlert = () => {
  return (dispatch) => {
    dispatch({ type: DISPLAY_ALERT });
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
};

export const registerUser = (formUser) => {
  return (dispatch) => {
    console.log(formUser);
    dispatch({ type: START_REGISTER });
    axios
      .post('/api/v1/auth/register', formUser)
      .then((response) => {
        console.log(response);
        dispatch({ type: REGISTER_USER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ERROR_REGISTER });
      });
  };
};
