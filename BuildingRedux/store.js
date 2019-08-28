const reducer = (state, update) => ({ ...state, ...update });

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

store.dispatch({ name: 'Rick' });
store.dispatch({ status: 'Getting Swifty' });
store.dispatch({ name: 'Morty' });
// state = reducer(state, { status: 'Getting Swifty' });
// state = reducer(state, { name: 'Morty' });
console.log(store.getState());
