import { HANDLE_SENDER_INFO } from '../actions/actions';

const initialState = {
  sender: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
};

const formReducer = (state = initialState, { type, payload }) => {
  if (type === HANDLE_SENDER_INFO) {
    const { name, value } = payload;
    return { ...state, sender: { ...state.sender, [name]: value } };
  }
  return state;
};

export default formReducer;
