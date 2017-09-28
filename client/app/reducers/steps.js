import { NEXT_STEP, PREV_STEP } from '../actions/steps'

export default function steps (state = {}, action) {
  let newState;
  switch (action.type) {
    case NEXT_STEP:
      newState = JSON.parse(JSON.stringify(state));
      return newState < 4 ? newState + 1 : newState;

    case PREV_STEP:
      newState = JSON.parse(JSON.stringify(state));
      return newState > 0 ? newState - 1 : newState;

    default:
      return state;
  }
}
