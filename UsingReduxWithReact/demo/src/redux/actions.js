import axios from 'axios';
import { UPDATE_CONTACT, UPDATE_USER } from './types';

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
