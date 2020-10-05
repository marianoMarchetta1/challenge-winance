import initialState from './initialState';
import { SET_FETCHING, SET_PEOPLE_LIST, GET_PEOPLE_ERROR } from './constants';

const people = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING: {
      return {
        ...state,
        isFetching: true,
        error: false,
        errorMessage: '',
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

    case GET_PEOPLE_ERROR: {
      return {
        ...state,
        error: true,
        errorMessage: 'An error has occurred',
        isFetching: false,
      };
    }

    default:
      return state;
  }
};

export default people;
