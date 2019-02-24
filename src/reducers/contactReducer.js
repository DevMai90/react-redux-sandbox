import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

// Each reducer has its own initial state
const initialState = {
  contacts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
        // state.contacts.push(action.payload) old way
      };
    default:
      return state;
  }
}
