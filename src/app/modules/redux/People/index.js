import initialState from './initialState';
import { SET_FETCHING, SET_PEOPLE_LIST } from './constants';

const people = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case SET_PEOPLE_LIST: {
      return {
        ...state,
        isFetching: false,
        list: [...action.list],
        previous: action.previous,
        next: action.next,
      };
    }

    default:
      return state;
  }
};

export default people;
