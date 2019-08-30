import { LOAD_CONTACTS, UPDATE_CONTACT, UPDATE_USER } from './types';

export const userReducer = (state = {}, action) => {
  if (action.type === UPDATE_USER) return { ...state, ...action.payload };
  // if (action.type === UPDATE_CONTACT)
  //   return { ...state, recentContact: action.payload };
  return state;
};

export const contactReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return action.payload;
    case UPDATE_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};
