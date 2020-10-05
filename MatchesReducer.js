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

export const deleteMatch = (match) => (
  {
    type: 'DELETE_MATCH',
    match
  }
)

const matchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MATCH':
      return {...state, matches: [...state.matches, action.match] };
    case 'CLEAR_MATCHES':
      return {matches: []}
    case 'DELETE_MATCH':
      let newMatches = state.matches.filter(match => match.title !== action.match.title)
      return {...state, matches: newMatches}
    default:
      return state
  }
};

export default combineReducers({
  matches: matchesReducer
});
