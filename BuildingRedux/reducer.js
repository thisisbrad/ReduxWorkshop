const reducer = (state, update) => ({ ...state, ...update });

let state = {};
state = reducer(state, { name: 'Rick' });
state = reducer(state, { status: 'Getting Swifty' });
state = reducer(state, { name: 'Morty' });

console.log(state);
