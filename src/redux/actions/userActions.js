import axios from 'axios';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  ERROR_REGISTER,
  REGISTER_USER,
  START_REGISTER,
} from './actions';

const addUserToLocalStorage = (user, token) => {
  localStorage.setItem('user', user);
  localStorage.setItem('token', token);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

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
    dispatch({ type: START_REGISTER });
    axios
      .post('/api/v1/auth/register', formUser)
      .then((response) => {
        const { user, token } = response.data;
        dispatch({ type: REGISTER_USER, payload: response.data });
        addUserToLocalStorage(user, token);
      })
      .catch((error) =>
        dispatch({ type: ERROR_REGISTER, payload: error.response.data.msg })
      );
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
};
