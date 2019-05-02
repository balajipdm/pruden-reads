import _ from 'lodash';

import {
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
  SEARCH_BOOKS_FAILURE,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE,
  CLOSE_BOOK
} from '../actions/types';

const INITIAL_STATE = {
  list: {},
  selected: null,
  loading: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_REQUEST:
      return { ...state, loading: true, error: null };
    case SEARCH_BOOKS_SUCCESS:
      return { ...state, loading: false, error: null, list: _.mapKeys(action.payload, 'id') };
    case SEARCH_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_BOOK_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_BOOK_SUCCESS:
      return { ...state, loading: false, error: null, selected: action.payload };
    case FETCH_BOOK_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLOSE_BOOK:
      return { ...state, selected: null };
    default:
      return state;
  }
};