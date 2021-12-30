import { HANDLE_SENDER_INFO } from './actions';

export const handleSenderInfo = (e) => {
  return (dispatch) =>
    dispatch({
      type: HANDLE_SENDER_INFO,
      payload: { name: e.target.name, value: e.target.value },
    });
};
