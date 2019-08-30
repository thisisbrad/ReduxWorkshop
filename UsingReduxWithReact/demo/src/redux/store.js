import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer, contactReducer } from './reducer';
import { updateUser, addContact } from './actions';

const DEFAULT_STATE = { user: {}, contacts: [] };

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  DEFAULT_STATE,
  composeEnhancers(applyMiddleware(thunk))
);

// store.dispatch(updateUser({ name: 'Rick' }));
// store.dispatch(updateUser({ status: 'Getting Swifty' }));
// store.dispatch(updateUser({ name: 'Morty' }));

// store.dispatch(addContact({ name: 'Morty', number: '123456789' }));
// store.dispatch(addContact({ name: 'Bob', number: '423456789' }));
// store.dispatch(addContact({ name: 'Tina', number: '523456789' }));
// store.dispatch(addContact({ name: 'Gene', number: '623456789' }));

// console.log(store.getState());

export default store;
