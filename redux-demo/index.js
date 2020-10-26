const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

// (prevState,action)=>newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

//Redux store
const store = createStore(reducer);

//Get current state
console.log('Initial state', store.getState());

//Subscribe for changes
const unsubscribe = store.subscribe(() =>
  console.log('Updated state', store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
