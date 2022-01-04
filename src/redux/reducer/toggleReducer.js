import {
  TOGGLE_FILTERS,
  OPEN_NEW_SIDEBAR,
  CLOSE_NEW_SIDEBAR,
} from '../actions/actions';

const inititalState = {
  isFiltersOpen: false,
  isEditSidebarOpen: false,
  isNewSidebarOpen: false,
};

const toggleReducer = (state = inititalState, { type, payload }) => {
  if (type === TOGGLE_FILTERS) {
    return { ...state, isFiltersOpen: !state.isFiltersOpen };
  }

  if (type === OPEN_NEW_SIDEBAR) {
    return { ...state, isNewSidebarOpen: true };
  }

  if (type === CLOSE_NEW_SIDEBAR) {
    return { ...state, isNewSidebarOpen: false };
  }
  return state;
};

export default toggleReducer;
