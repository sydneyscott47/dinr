import { combineReducers } from 'redux';

// initialState
const INITIAL_STATE = {
  matches: [],
};

//action
export const addMatch = match => (
  {
    type: 'ADD_MATCH',
    match,
  }
);

export const clearMatches = () => (
  {
    type: 'CLEAR_MATCHES'
  }
)

const matchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MATCH':
      return {...state, matches: [...state.matches, action.match] };
    case 'CLEAR_MATCHES':
      return {matches: []}
    default:
      return state
  }
};

export default combineReducers({
  matches: matchesReducer
});
