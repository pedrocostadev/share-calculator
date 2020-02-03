import { combineReducers } from 'redux';

import operations from './operations';
import uiState from './uiState';

export default combineReducers({
  operations,
  uiState,
});
