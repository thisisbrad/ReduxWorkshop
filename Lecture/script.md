**Notes**

- go over where their app stands as far as complexity and state management

- [SLIDE] to explain MVC flow show how the flow goes both ways.

Flux

- “An application architecture for React utilizing a
  unidirectional data flow”

  - The views react to changes in some number of “stores”
  - The only thing that can update data in a store is a “dispatcher”
  - The only way to trigger the dispatcher is by invoking “actions”
  - Actions are triggered from the views

- [SLIDE] to show how Flux only goes in one direction.

- dispatch sends data to the store and the stores will update
- How do you trigger the dispatch? Through an action
- Your store updates numbers of views
- repeat flow.

- Redux uses the same priciple but has a single store, a single source of truth.

### Redux

- A data management library inspired by Flux

**Three main pilars of Redux**

- Single source of truth for data
- State can only be updated by an action that triggers a
  recomputation (Dispatching an Action)
- Updates are made using pure functions. (Action Creators)
- a Pure function is a function that takes an arugement and will always return the same value of whats put in.
- It's fully deterministic, meaning that given the same arugements it will always retrun the same answer. It doesn't take other values into consideration for the computation that it gives.
- no side effects. meaning it doesn't log or mutate anything outside it's scope.

**Data flows**

- Action Creator → Action → Dispatch → Reducer → Update Store (Full Flow)
- Action → Reducer → Update Store (Basic Flow)

[SLIDE] that shows the redux flow

### Reducer

- Takes the previous state and an update and applies the
  update
- Should be a pure function
  - Result is deterministic and determined exclusively by arguments
  - No side effects
- Should be immutable
  - Return a new object

[Demo]

- show a simple reducer.
- update state with the reducers
- walk through each line

```js
const reducer = (state, update) => ({ ...state, ...update });

let state = {};
state = reducer(state, { name: 'Rick' });
state = reducer(state, { status: 'Getting Swifty' });
state = reducer(state, { name: 'Morty' });

console.log(state);
```

- What is responsible for invoking the reducer? And how to do we actually manage the state?

- instead of mutating the state object why don't we wrap it up in something self contained like a class? That's basically what Redux's store is.

### Store

- Responsible for maintaining state
- Exposes getter via getState()
- Can only be updated by using dispatch()
- Can add listeners that get invoked when state changes

- So what does a store need? List the items on slide
- Lets pass the store a reducer ans some initial state.
- what should it do in the constructor?
- now lets add methods to actually interface with our class instance.
- log out the state with get state
- add getState() and log

- most importantly we need a way to update our state
- In Redux it's done by invoking dispath with an action to update itself with.
- dispatch take in the update and uses the reducer to update the state

- add store.dispatch to code and go over it
- now instead of handling the reducers ourselves both the reducer and the state are abrstacted away.
- instead of us creating state and mutating it with the return values from the reducer we are letting the Store handle that for us. So we don't have to keep passing the old state.

**Expanding our reducers abilities**

- Right now our reducer can only merge objects, but what if we wanted to use arrays.

- we can create as many reducers as we need for our state.
- now that we have more than one we need a way to combine them since the store only takes in one.

- How does redux know what part of the state to update? While through these things called actions.

### Actions

- An action is a piece of data that contains the information
  required to make a state update
- Usually objects with a type key. Follow FSA.
- Functions that create actions are called action creators
- Actions must be dispatched in order to affect the state

* What if we had a piece of data that declared what type of action it was.

* Go over FSA. Discuss uniformity

* Add a type to dispatch and check for the type in the reducer.

* check for type in reducer

* go over the flow from dispatch to store

```js
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
```

### Reducer

- Narrows down to a specific part of state in the store
- Takes an action to update the store with

```js
const reducer = (state, update) => [...state, ...update];

let state = {};
state = reducer(state, { name: 'Rick' });
state = reducer(state, { status: 'Getting Swifty' });
state = reducer(state, { name: 'Morty' });

console.log(state);
```

### Connecting the Store and Reducer

> Reducer → Update Store

When connecting the reducer to the store we can update specific parts of the state object.

```js
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

const reducer = (state, update) => [...state, ...update];

const store = new Store(reducer, { name: 'Rick' });
store.dispatch({ name: 'Rick' });
store.dispatch({ status: 'Getting Swifty' });
store.dispatch({ name: 'Morty' });

console.log(store.getState());
```

### Putting it all together

> Reducer → Update Store

When connecting the reducer to the store we can update specific parts of the state object.

```js
// action types
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CONTACT = 'UPDATE_CONTACT';

// Store (State is stored here)
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

// Default state to populate our Store at first
const DEFAULT_STATE = { user: {}, contacts: [] };

// Reducers (update Store)
const contactReducer = (state, action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload];
  return state;
};

const userReducer = (state, action) => {
  if (action.type === UPDATE_USER) return [state, action.payload];
  if (action.type === UPDATE_CONTACT)
    return [state, { prevContact: action.payload }];
  return state;
};

// Combining our reducers
const reducer = (state, action) => ({
  user: userReducer(state.user, action),
  contacts: contactReducer(state.contacts, action)
});

// action creators
const updateUser = update => ({
  type: UPDATE_USER,
  payload: update
});

const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact
});

const createUser = (username, password) => {
  return addContact({ username, password });
};

const store = new Store(reducer, DEFAULT_STATE);
store.dispatch(updateUser({ name: 'Rick' }));
store.dispatch(updateUser({ status: 'Gettign Swifty' }));
store.dispatch(updateUser({ name: 'Rick' }));

store.dispatch(addContact({ name: 'jordan h', number: '1234567890' }));
store.dispatch(addContact({ name: 'jordan h', number: '1234567890' }));
store.dispatch(addContact({ name: 'david m', number: '5050505050' }));

console.log(store.getState());
```

### Async Actions
