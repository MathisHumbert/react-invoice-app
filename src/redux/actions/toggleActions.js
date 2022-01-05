import { resetBorder } from '../../utils/helpers';
import {
  OPEN_NEW_SIDEBAR,
  CLOSE_NEW_SIDEBAR,
  TOGGLE_FILTERS,
  TOGGLE_DELETION,
  OPEN_EDIT_SIDEBAR,
  CLOSE_EDIT_SIDEBAR,
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
  resetBorder();
  return (dispatch) => dispatch({ type: CLOSE_NEW_SIDEBAR });
};

export const openEditSidebar = () => {
  const root = document.getElementById('root');
  root.classList.add('stop-scrolling');
  return (dispatch) => dispatch({ type: OPEN_EDIT_SIDEBAR });
};

export const closeEditSidebar = () => {
  const root = document.getElementById('root');
  root.classList.remove('stop-scrolling');
  resetBorder();
  return (dispatch) => dispatch({ type: CLOSE_EDIT_SIDEBAR });
};

export const toggleDeletion = () => {
  return (dispatch) => dispatch({ type: TOGGLE_DELETION });
};
