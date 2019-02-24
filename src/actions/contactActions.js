// ACTION CREATORS
import { GET_CONTACTS } from './types';
import { DELETE_CONTACT } from './types';
import { ADD_CONTACT } from './types';

// Actions are OBJECTS
export const getContacts = () => {
  return {
    type: GET_CONTACTS
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};
