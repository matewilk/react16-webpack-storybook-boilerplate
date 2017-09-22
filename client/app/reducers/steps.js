import { NEXT_STEP, PREV_STEP } from '../actions/steps'

export default function steps (state = {}, action) {
  let newState;
  switch (action.type) {
    case NEXT_STEP:
      newState = JSON.parse(JSON.stringify(state));
      return newState + 1;

    case PREV_STEP:
      newState = JSON.parse(JSON.stringify(state));
      return newState - 1;

    default:
      return state;
  }
}
