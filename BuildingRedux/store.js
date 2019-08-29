const userReducer = (state, update) => ({ ...state, ...update });
const contactReducer = (state, newContact) => [...state, newContact];

const reducer = (state, action) => {
  if (action.type === 'UPDATE_USER') {
    //
  }
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

const store = new Store(reducer, {});

store.dispatch({ type: 'UPDATE_USER', payload: { name: 'Rick' } });
store.dispatch({ type: 'UPDATE_USER', payload: { status: 'Getting Swifty' } });
store.dispatch({ type: 'UPDATE_USER', payload: { name: 'Morty' } });
// state = reducer(state, { status: 'Getting Swifty' });
// state = reducer(state, { name: 'Morty' });
console.log(store.getState());
