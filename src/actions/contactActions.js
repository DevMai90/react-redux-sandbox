// ACTION CREATORS
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import axios from 'axios';

// Actions are OBJECTS
export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export const addContact = contact => async dispatch => {
  // Makes the post request and puts the returned data into res
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/users/',
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};
