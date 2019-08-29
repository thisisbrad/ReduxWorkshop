const DEFAULT_STATE = { user: {}, contacts: [] };
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CONTACT = 'UPDATE_CONTACT';

const userReducer = (state, update) => ({ ...state, ...update });
const contactReducer = (state, newContact) => [...state, newContact];

const reducer = (state, action) => {
  if (action.type === UPDATE_USER) {
    return {
      ...state,
      user: userReducer(state.user, action.payload)
    };
  }

  if (action.type === UPDATE_CONTACT) {
    return {
      ...state,
      contacts: contactReducer(state.contacts, action.payload)
    };
  }

  return state;
};

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}

const store = new Store(reducer, DEFAULT_STATE);

store.dispatch({ type: UPDATE_USER, payload: { name: 'Rick' } });
store.dispatch({ type: UPDATE_USER, payload: { status: 'Getting Swifty' } });
store.dispatch({ type: UPDATE_USER, payload: { name: 'Morty' } });

store.dispatch({
  type: UPDATE_CONTACT,
  payload: { name: 'Morty', number: '123456789' }
});

console.log(store.getState());
