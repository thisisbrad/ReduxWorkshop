const reducer = (state, update) => ({ ...state, ...update });

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }
}

const store = new Store(reducer, {});
console.log(store.getState());

// state = reducer(state, { name: 'Rick' });
// state = reducer(state, { status: 'Getting Swifty' });
// state = reducer(state, { name: 'Morty' });
