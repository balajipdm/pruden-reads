import books from '../apis/books';
import x2js from 'x2js';

import {
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
  SEARCH_BOOKS_FAILURE,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE,
  CLOSE_BOOK
} from './types';

const searchBooksRequest = () => {
  return { type: SEARCH_BOOKS_REQUEST };
};

const searchBooksSuccess = payload => {
  if (!Array.isArray(payload)) {
    payload = [payload];
  }
  return { type: SEARCH_BOOKS_SUCCESS, payload };
};

const searchBooksFailure = payload => {
  return { type: SEARCH_BOOKS_FAILURE, payload };
};

export const searchBooks = query => dispatch => {
  dispatch(searchBooksRequest());
  books.get(`/search/index.xml?q=${query}`)
    .then(response => new x2js().xml2js(response.data))
    .then(data => dispatch(searchBooksSuccess(data.GoodreadsResponse.search.results.work)))
    .catch(e => dispatch(searchBooksFailure(e.toString())));
};

const fetchBookRequest = () => {
  return { type: FETCH_BOOK_REQUEST };
};

const fetchBookSuccess = payload => {
  return { type: FETCH_BOOK_SUCCESS, payload };
};

const fetchBookFailure = payload => {
  return { type: FETCH_BOOK_FAILURE, payload };
};

export const fetchBook = id => dispatch => {
  dispatch(fetchBookRequest());
  books.get(`/book/show.xml?id=${id}`)
    .then(response => new x2js().xml2js(response.data))
    .then(data => dispatch(fetchBookSuccess(data.GoodreadsResponse.book)))
    .catch(e => dispatch(fetchBookFailure(e.toString())));
};

export const closeBook = () => {
  return { type: CLOSE_BOOK };
};