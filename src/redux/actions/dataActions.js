import { GET_ALL_ITEMS, GET_SINGLE_ITEM, START_FETCH } from './actions';

export const getAllItems = (url) => {
  return (dispatch) => {
    dispatch({ type: START_FETCH });
    // GET METHOD
    dispatch({ type: GET_ALL_ITEMS, payload: url });
  };
};

export const getSingleItem = (data, id) => {
  return (dispatch) => {
    dispatch({ type: START_FETCH });
    const tempData = data.filter((item) => item.id === id)[0];
    console.log(tempData);
    // GET METHOD
    dispatch({ type: GET_SINGLE_ITEM, payload: tempData });
  };
};
