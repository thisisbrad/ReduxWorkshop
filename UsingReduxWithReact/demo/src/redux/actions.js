import axios from 'axios';
import { UPDATE_CONTACT, UPDATE_USER, LOAD_CONTACTS } from './types';

export const updateUser = update => ({ type: UPDATE_USER, payload: update });

export const addContact = newContact => async dispatch => {
  console.log('in action', newContact);

  try {
    const res = await axios.post(
      ' https://endpoint.yourcode.app/thisisbrad/api/contacts',
      newContact
    );
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: res.data
    });
  } catch (error) {
    console.log('error', error);
  }
  return { type: UPDATE_CONTACT, payload: newContact };
};

export const fetchContacts = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://endpoint.yourcode.app/thisisbrad/api/contacts'
    );

    console.log('action results', res.data);

    dispatch({
      type: LOAD_CONTACTS,
      payload: res.data
    });
    return res;
  } catch (err) {
    console.error(err);
  }
};
