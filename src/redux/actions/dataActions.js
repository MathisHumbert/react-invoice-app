import axios from 'axios';
import {
  ERROR_FETCH,
  GET_ALL_INVOICES,
  GET_SINGLE_INVOICE,
  START_FETCH,
  UPDATE_INVOICE,
  DELETE_INVOICE,
} from './actions';
import { url } from '../../utils/constants';

export const getAllInvoices = () => {
  return (dispatch) => {
    dispatch({ type: START_FETCH });
    // GET METHOD
    axios
      .get(url)
      .then((response) =>
        dispatch({ type: GET_ALL_INVOICES, payload: response.data })
      )
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
  };
};

export const getSingleInvoice = (id) => {
  return (dispatch) => {
    dispatch({ type: START_FETCH });
    // GET METHOD
    axios
      .get(`${url}/${id}`)
      .then((response) =>
        dispatch({ type: GET_SINGLE_INVOICE, payload: response.data })
      )
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
  };
};

export const updateInvoice = (id, data) => {
  return (dispatch) => {
    // PATCH METHOD
    axios
      .patch(`${url}/${id}`, data)
      .then((response) => {
        dispatch({ type: UPDATE_INVOICE, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
};

export const deleteInvoice = (id) => {
  return (dispatch) => {
    // DELETE METHOD
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        dispatch({ type: DELETE_INVOICE });
      })
      .catch((error) => console.log(error));
  };
};
