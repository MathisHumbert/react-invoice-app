import {
  GET_ALL_ITEMS,
  GET_SINGLE_ITEM,
  START_FETCH,
} from '../actions/actions';

const initialState = {
  all_invoices: [],
  single_invoice: [],
  isLoading: true,
};

const dataReducer = (state = initialState, { type, payload }) => {
  if (type === START_FETCH) {
    return { ...state, isLoading: true };
  }
  if (type === GET_ALL_ITEMS) {
    return { ...state, all_invoices: payload, isLoading: false };
  }
  if (type === GET_SINGLE_ITEM) {
    return { ...state, single_invoice: payload, isLoading: false };
  }
  return state;
};

export default dataReducer;
