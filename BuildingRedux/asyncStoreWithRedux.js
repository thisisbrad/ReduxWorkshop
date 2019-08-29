const { createStore, combineReducers, applyMiddleware } = require('redux');
const { thunk } = require('redux-thunk');

const DEFAULT_STATE = { user: {}, contacts: [] };
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CONTACT = 'UPDATE_CONTACT';

const userReducer = (state = {}, action) => {
  if (action.type === UPDATE_USER) return { ...state, ...action.payload };
  // if (action.type === UPDATE_CONTACT)
  //   return { ...state, recentContact: action.payload };
  return state;
};

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload];
  return state;
};

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer
});

// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//   } else {
//     next(action);
//   }
// };

const store = createStore(reducer, DEFAULT_STATE, applyMiddleware(thunk));

const updateUser = update => ({ type: UPDATE_USER, payload: update });

const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact
});

store.dispatch(updateUser({ name: 'Rick' }));
store.dispatch(updateUser({ status: 'Getting Swifty' }));
store.dispatch(updateUser({ name: 'Morty' }));

store.dispatch(addContact({ name: 'Morty', number: '123456789' }));

console.log(store.getState());
