import axios from 'axios';
import {
  ERROR_FETCH,
  GET_ALL_ITEMS,
  GET_SINGLE_ITEM,
  START_FETCH,
  UPDATE_ITEM,
} from './actions';
import { url } from '../../utils/constants';

export const getAllItems = () => {
  return (dispatch) => {
    dispatch({ type: START_FETCH });
    // GET METHOD
    axios
      .get(url)
      .then((response) =>
        dispatch({ type: GET_ALL_ITEMS, payload: response.data })
      )
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
  };
};

export const getSingleItem = (id) => {
  return (dispatch) => {
    dispatch({ type: START_FETCH });
    // GET METHOD
    axios
      .get(`${url}/${id}`)
      .then((response) =>
        dispatch({ type: GET_SINGLE_ITEM, payload: response.data })
      )
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
  };
};

export const markAsPaid = (id, data) => {
  return (dispatch) => {
    // PATCH METHOD
    axios
      .patch(`${url}/${id}`, data)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: UPDATE_ITEM, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
};
