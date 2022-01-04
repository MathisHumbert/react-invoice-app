import {
  OPEN_NEW_SIDEBAR,
  CLOSE_NEW_SIDEBAR,
  TOGGLE_FILTERS,
  TOGGLE_DELETION,
} from './actions';

export const toggleFilters = () => {
  return (dispatch) => dispatch({ type: TOGGLE_FILTERS });
};

export const openNewSidebar = () => {
  const root = document.getElementById('root');
  root.classList.add('stop-scrolling');
  return (dispatch) => dispatch({ type: OPEN_NEW_SIDEBAR });
};

export const closeNewSidebar = () => {
  const root = document.getElementById('root');
  root.classList.remove('stop-scrolling');
  return (dispatch) => dispatch({ type: CLOSE_NEW_SIDEBAR });
};

export const toggleDeletion = () => {
  return (dispatch) => dispatch({ type: TOGGLE_DELETION });
};
