import { OPEN_NEW_SIDEBAR, CLOSE_NEW_SIDEBAR, TOGGLE_FILTERS } from './actions';

export const toggleFilters = () => {
  return (dispatch) => dispatch({ type: TOGGLE_FILTERS });
};

export const openNewSidebar = () => {
  return (dispatch) => dispatch({ type: OPEN_NEW_SIDEBAR });
};

export const closeNewSidebar = () => {
  return (dispatch) => dispatch({ type: CLOSE_NEW_SIDEBAR });
};
