import {
  TOGGLE_FILTERS,
  OPEN_NEW_SIDEBAR,
  CLOSE_NEW_SIDEBAR,
  TOGGLE_DELETION,
  OPEN_EDIT_SIDEBAR,
  CLOSE_EDIT_SIDEBAR,
} from '../actions/actions';

const inititalState = {
  isFiltersOpen: false,
  isEditSidebarOpen: false,
  isNewSidebarOpen: false,
  isDeletionOpen: false,
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

  if (type === OPEN_EDIT_SIDEBAR) {
    return { ...state, isEditSidebarOpen: true };
  }

  if (type === CLOSE_EDIT_SIDEBAR) {
    return { ...state, isEditSidebarOpen: false };
  }

  if (type === TOGGLE_DELETION) {
    return { ...state, isDeletionOpen: !state.isDeletionOpen };
  }

  return state;
};

export default toggleReducer;
