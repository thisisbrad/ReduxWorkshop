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

- Add a default state

- How do we add contact? Lets make a new type.

- Use UPDATE_CONTACT and walk through code

- Bring in const types to help with typos and being consistent

- Make action creators for both user and contacts.

- Use action creators in the dispatch function

- Go over flow and point out a scaling problem

- Where can we put the logic so that every reducer has the ability to look at all actions?

- lets make a reducer that passes the action on to all the smaller reducers and allow for the ability of more than one reducer to respond to the same action type.

- maybe we can just return a object with each key of out state and assign the corresponding reducer.

- Fix the issues with the reducers and default state

- make user reducer respond to both types and show switch statement

- make new file and install Redux

- require in createStore and replace store class

- bring in combinereducers and replace our reducer

- Go over Async Actions next

- Go over React and Redux

- How to we get our state into components?

**Supporting Async Requests [Step 10]**

- Where do we want to add this support? How do we
  change our API?
  - Reducers
  - Store
  - Actions
  - Action creators
- We need to change more than just the action creators
- Store.dispatch() needs to accept other types
- Our addition is unideal, since we had to change our redux
  implementation

- start off by making an async action creator
- then point out .then just contunies the Promise chain.
- pretend we had access to dispatch then we could still dispath our actions
- point out loginUser() returns a function with dispatch in it

- what we are doing is not ideal it was cause us to rewrtie or rework redux which we don't want.

**Redux Middleware**

- This allows us to extend redux without having to touch the
  implementation
- Any function with this prototype can be middleware
  - ({getState, dispatch}) => next => action => void
- We can reimplement our feature as middleware
- https://github.com/gaearon/redux-thunk
  - “A thunk is a function that wraps an expression to delay its evaluation"

**Async with Redux Middleware**

- mess with dispatch to make it all work
- bring in actual redux and state converting
- discuss middleware and how it works
- create our own thunk function
- bring in thunk for real

**Move on to React and Redux**

- open up demo app
- show form the way it is with state
- bring in our old store and everthing else
- move files around and export everything

- step 15 is the starting point for everyone
-

* now bring in store to Services

- replace contacts in the render
- replace setState with dispatch

* now why is our view updating?

- how can we bind react and redux in a clean manner

- go over HOC and install react-redux

- use connect and add provider in App
- go back to services and mapStateToProps

- Add thunk and dev tools

- start async actions
