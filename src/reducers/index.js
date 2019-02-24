// ROOT REDUCER
// Meeting place for all of our reducers.
import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

// Export all of our reducers as an object
export default combineReducers({
  contact: contactReducer
});
