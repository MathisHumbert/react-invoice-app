import { TOGGLE_FILTERS } from './actions';

export const toggleFilters = () => {
  return (dispatch) => dispatch({ type: TOGGLE_FILTERS });
};
