const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// (prevState,action)=>newState

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const initialCakeState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

//Root reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//Redux store
const store = createStore(rootReducer, applyMiddleware(logger));

//Get current state
console.log('Initial state', store.getState());

//Subscribe for changes
const unsubscribe = store.subscribe(
  () => {}
  //   console.log('Updated state', store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
