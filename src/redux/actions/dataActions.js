import axios from 'axios';
import {
  ERROR_FETCH,
  GET_ALL_INVOICES,
  GET_SINGLE_INVOICE,
  START_FETCH,
  UPDATE_INVOICE,
  DELETE_INVOICE,
  CREATE_INVOICE,
} from './actions';

export const getAllInvoices = () => {
  return (dispatch) => {
    dispatch({ type: START_FETCH });
    // GET METHOD
    axios
      .get('/api/v1/invoices')
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
      .get(`/api/v1/invoices/${id}`)
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
      .patch(`/api/v1/invoices/${id}`, data)
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
      .delete(`/api/v1/invoices/${id}`)
      .then((response) => {
        dispatch({ type: DELETE_INVOICE });
      })
      .catch((error) => console.log(error));
  };
};

export const createInvoice = (data) => {
  return (dispatch) => {
    // PUT METHOD
    axios
      .post('/api/v1/invoices', data)
      .then((response) => {
        console.log(response);
        dispatch({ type: CREATE_INVOICE, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
};
