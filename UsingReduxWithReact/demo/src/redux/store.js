const { createStore, combineReducers } = require('redux');

import { userReducer, contactReducer } from './reducer';

const DEFAULT_STATE = { user: {}, contacts: [] };

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer
});

const store = createStore(reducer, DEFAULT_STATE);

// store.dispatch(updateUser({ name: 'Rick' }));
// store.dispatch(updateUser({ status: 'Getting Swifty' }));
// store.dispatch(updateUser({ name: 'Morty' }));

// store.dispatch(addContact({ name: 'Morty', number: '123456789' }));

console.log(store.getState());
