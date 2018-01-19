import C from '../constants';

export default function reducer (state = {}, action) {
  switch (action.type) {
    case C.ACTION_ONE:
      return {...state};

    case C.ACTION_TWO:
      return {...state};

    default:
      return state;
  }
}
