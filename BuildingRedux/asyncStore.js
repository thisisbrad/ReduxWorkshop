const axios = require('axios');

const DEFAULT_STATE = { user: {}, contacts: [] };
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CONTACT = 'UPDATE_CONTACT';

const login = async (username, password) => {
  axios
    .post('http://localhost:3000/auth/login', { username, password })
    .then(function(response) {
      // handle success
      console.log(response.data);
      return response.data.token;
    })
    .catch(function(error) {
      // handle error
      console.log('>>>', error);
      throw new Error(error);
    });
};

const userReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case UPDATE_CONTACT:
      return { ...state, prevContact: action.payload };
    case 'LOG_IN_SUCCESS':
      return { ...state, token: 'fakeToken' };
    default:
      return state;
  }
};

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload];
  return state;
};

const reducer = (state, action) => ({
  user: userReducer(state.user, action),
  contacts: contactReducer(state.contact, action)
});

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    if (typeof action === 'function') {
      action(this.dispatch.bind(this));
    } else {
      console.log('received an action:', action.type);
      this.state = this.reducer(this.state, action);
    }
  }

  // dispatch(update) {
  //   this.state = this.reducer(this.state, update);
  // }
}

const store = new Store(reducer, DEFAULT_STATE);

const updateUser = update => ({ type: UPDATE_USER, payload: update });

const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact
});

// async action creator
const logInUser = (username, password) => dispatch => {
  dispatch({ type: 'LOG_IN_SENT' });
  login(username, password)
    .then(() => {
      dispatch({ type: 'LOG_IN_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'LOG_IN_REJECTED' });
    });
};

store.dispatch(logInUser('username', 'password'));

// store.dispatch(updateUser({ name: 'Rick' }));
// store.dispatch(updateUser({ status: 'Getting Swifty' }));
// store.dispatch(updateUser({ name: 'Morty' }));
// // store.dispatch({ type: UPDATE_USER, payload: { name: 'Morty' } });

// store.dispatch(addContact({ name: 'Morty', number: '123456789' }));
// // store.dispatch({
// //   type: UPDATE_CONTACT,
// //   payload: { name: 'Morty', number: '123456789' }
// // });

console.log(store.getState());
