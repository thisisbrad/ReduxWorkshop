import { createStore, combineReducers } from 'redux';
import { userReducer, contactReducer } from './reducer';
import { updateUser, addContact } from './actions';

const DEFAULT_STATE = { user: {}, contacts: [] };

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer
});

const store = createStore(reducer, DEFAULT_STATE);

store.dispatch(updateUser({ name: 'Rick' }));
store.dispatch(updateUser({ status: 'Getting Swifty' }));
store.dispatch(updateUser({ name: 'Morty' }));

store.dispatch(addContact({ name: 'Morty', number: '123456789' }));
store.dispatch(addContact({ name: 'Bob', number: '423456789' }));
store.dispatch(addContact({ name: 'Tina', number: '523456789' }));
store.dispatch(addContact({ name: 'Gene', number: '623456789' }));

console.log(store.getState());

export default store;
