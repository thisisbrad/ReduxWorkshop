import { UPDATE_CONTACT, UPDATE_USER } from './types';

export const updateUser = update => ({ type: UPDATE_USER, payload: update });

export const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact
});
