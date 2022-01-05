import {
  ERROR_FETCH,
  GET_ALL_ITEMS,
  GET_SINGLE_ITEM,
  UPDATE_ITEM,
  START_FETCH,
} from '../actions/actions';

const initialState = {
  all_invoices: [],
  single_invoice: [],
  isLoading: true,
  isError: false,
};

const dataReducer = (state = initialState, { type, payload }) => {
  if (type === START_FETCH) {
    return { ...state, isLoading: true, isError: false };
  }
  if (type === ERROR_FETCH) {
    return { ...state, isLoading: true, isError: true };
  }
  if (type === GET_ALL_ITEMS) {
    return { ...state, all_invoices: payload, isLoading: false };
  }
  if (type === GET_SINGLE_ITEM) {
    return { ...state, single_invoice: payload, isLoading: false };
  }
  if (type === UPDATE_ITEM) {
    return { ...state, single_invoice: payload };
  }
  return state;
};

export default dataReducer;
