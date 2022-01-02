import {
  HANDLE_CLIENT_INFO,
  HANDLE_DATE_INFO,
  HANDLE_GENERAL_INFO,
  HANDLE_SENDER_INFO,
  HANDLE_TERM_INFO,
} from './actions';

export const handleSenderInfo = (e) => {
  return (dispatch) =>
    dispatch({
      type: HANDLE_SENDER_INFO,
      payload: { name: e.target.name, value: e.target.value },
    });
};

export const handleClientInfo = (e) => {
  return (dispatch) =>
    dispatch({
      type: HANDLE_CLIENT_INFO,
      payload: { name: e.target.name, value: e.target.value },
    });
};

export const handleGeneralInfo = (e) => {
  return (dispatch) =>
    dispatch({
      type: HANDLE_GENERAL_INFO,
      payload: { name: e.target.name, value: e.target.value },
    });
};

export const handleDateInfo = (date, type) => {
  return (dispatch) =>
    dispatch({ type: HANDLE_DATE_INFO, payload: { date, type } });
};

export const handleTermInfo = (term) => {
  return (dispatch) => dispatch({ type: HANDLE_TERM_INFO, payload: term });
};
