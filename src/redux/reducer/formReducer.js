import uniqid from 'uniqid';
import { getFullDate, getTodayDate, getUpdatedDate } from '../../utils/helpers';
import {
  HANDLE_CLIENT_INFO,
  HANDLE_DATE_INFO,
  HANDLE_GENERAL_INFO,
  HANDLE_ITEM_INFO,
  HANDLE_SENDER_INFO,
  HANDLE_TERM_INFO,
} from '../actions/actions';

// satus
// description
// items
// send all the data
// refactor all off the code for less action ?

const initialState = {
  createdAt: getTodayDate(new Date()),
  paymentDue: getUpdatedDate(new Date(), 30),
  description: '',
  paymentTerms: 30,
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
  items: [
    {
      id: uniqid(),
      name: '',
      quantity: 1,
      price: 0,
      total: 0,
    },
  ],
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

  if (type === HANDLE_DATE_INFO) {
    if (payload.type === 'createdAt') {
      const paymentDue = getUpdatedDate(
        getFullDate(payload.date),
        state.paymentTerms
      );

      return {
        ...state,
        createdAt: payload.date,
        paymentDue,
      };
    } else {
      return { ...state, paymentDue: payload.date };
    }
  }

  if (type === HANDLE_TERM_INFO) {
    return { ...state, paymentTerms: payload };
  }

  if (type === HANDLE_ITEM_INFO) {
    const { name, value, id } = payload;
    const items = state.items.map((item) => {
      if (item.id === id) {
        item[name] = value;
      }
      return item;
    });

    return { ...state, items };
  }
  return state;
};

export default formReducer;
