import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  ERROR_REGISTER,
  REGISTER_USER,
  START_REGISTER,
} from '../actions/actions';

const localUser = localStorage.getItem('user');
const localToken = localStorage.getItem('token');

const inititalState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: localUser || null,
  token: localToken || null,
};

const userReducer = (state = inititalState, { type, payload }) => {
  if (type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: 'All fields are required!',
      alertType: 'danger',
    };
  }
  if (type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: '',
      alertType: '',
    };
  }
  if (type === START_REGISTER) {
    return { ...state, isLoading: true };
  }
  if (type === REGISTER_USER) {
    return {
      ...state,
      isLoading: false,
      user: payload.user,
      token: payload.token,
      showAlert: true,
      alertText: 'User Created! Redirecting...',
      alertType: 'success',
    };
  }
  if (type === ERROR_REGISTER) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: payload,
      alertType: 'danger',
    };
  }
  return state;
};

export default userReducer;
