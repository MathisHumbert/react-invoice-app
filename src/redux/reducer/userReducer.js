const inititalState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  token: null,
};

const userReducer = (state = inititalState, { type, payload }) => {
  return state;
};

export default userReducer;
