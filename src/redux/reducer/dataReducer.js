import {
  CREATE_INVOICE,
  DELETE_INVOICE,
  ERROR_FETCH,
  GET_ALL_INVOICES,
  GET_SINGLE_INVOICE,
  START_FETCH,
  UPDATE_INVOICE,
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
  if (type === GET_ALL_INVOICES) {
    return { ...state, all_invoices: payload, isLoading: false };
  }
  if (type === GET_SINGLE_INVOICE) {
    return { ...state, single_invoice: payload, isLoading: false };
  }
  if (type === UPDATE_INVOICE) {
    return { ...state, single_invoice: payload };
  }
  if (type === DELETE_INVOICE) {
    return { ...state, single_invoice: [] };
  }
  if (type === CREATE_INVOICE) {
    return { ...state, all_invoices: [...state.all_invoices, payload] };
  }
  return state;
};

export default dataReducer;
