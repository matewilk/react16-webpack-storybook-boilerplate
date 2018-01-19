import { ACTION_ONE, ACTION_TWO } from '../actions/actions'

export default function reducer (state = {}, action) {
  let newState;
  switch (action.type) {
    case ACTION_ONE:
      newState = JSON.parse(JSON.stringify(state));
      return newState;

    case ACTION_TWO:
      newState = JSON.parse(JSON.stringify(state));
      return newState;

    default:
      return state;
  }
}
