import { combineReducers } from 'redux';
import tourReducer from './tourReducer/tourReducer';
import featuresReducer from './featuresReducer/featuresReducer';
import colorReducer from './colorReducer/colorReducer';

import colorCarReducer from './colorReducer/colorCarReducer';

export default combineReducers({
  tourReducer,
  featuresReducer,
  colorReducer,
  colorCarReducer
});