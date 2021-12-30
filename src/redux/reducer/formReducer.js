import {
  HANDLE_CLIENT_INFO,
  HANDLE_GENERAL_INFO,
  HANDLE_SENDER_INFO,
} from '../actions/actions';

const initialState = {
  createdAt: '',
  clientName: '',
  clientEmail: '',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
};

const formReducer = (state = initialState, { type, payload }) => {
  if (type === HANDLE_SENDER_INFO) {
    const { name, value } = payload;
    return {
      ...state,
      senderAddress: { ...state.senderAddress, [name]: value },
    };
  }

  if (type === HANDLE_CLIENT_INFO) {
    const { name, value } = payload;
    return {
      ...state,
      clientAddress: { ...state.clientAddress, [name]: value },
    };
  }

  if (type === HANDLE_GENERAL_INFO) {
    const { name, value } = payload;
    return {
      ...state,
      [name]: value,
    };
  }
  return state;
};

export default formReducer;
