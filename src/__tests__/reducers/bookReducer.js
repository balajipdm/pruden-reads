import bookReducer from '../../reducers/bookReducer';
import * as types from '../../actions/types';

const initialState = {
  list: {},
  selected: null,
  loading: null,
  error: null
};

describe('bookReducer', () => {

  it('should return the initial state', () => {
    expect(bookReducer(undefined, {})).toEqual(initialState);
  });

  it('should update state for search books request', () => {
    expect(bookReducer(initialState, { type: types.SEARCH_BOOKS_REQUEST })).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  });

  it('should update state for search books failure', () => {
    expect(bookReducer(initialState, { type: types.SEARCH_BOOKS_FAILURE, payload: 'error occured' })).toEqual({
      ...initialState,
      loading: false,
      error: 'error occured',
    });
  });

  it('should update state for successful search books results', () => {
    expect(bookReducer(initialState, {
      type: types.SEARCH_BOOKS_SUCCESS,
      payload: [{ id: 1, title: 'test title' }, { id: 2, title: 'test title two' }],
    })).toEqual({
      ...initialState,
      loading: false,
      error: null,
      list: {1: { id: 1, title: 'test title' }, 2: { id: 2, title: 'test title two' }},
    });
  });

  it('should update state for fetch book request', () => {
    expect(bookReducer(initialState, { type: types.FETCH_BOOK_REQUEST })).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  });

  it('should update state for fetch boook request failure', () => {
    expect(bookReducer(initialState, { type: types.FETCH_BOOK_FAILURE, payload: 'error occured' })).toEqual({
      ...initialState,
      loading: false,
      error: 'error occured',
    });
  });

  it('should update state for successful fetch book result', () => {
    const expectData = { id: 1, title: 'test title' };
    expect(bookReducer(initialState, {
      type: types.FETCH_BOOK_SUCCESS,
      payload: expectData,
    })).toEqual({
      ...initialState,
      loading: false,
      error: null,
      selected: expectData,
    });
  });

  it('should update state selected book for close book', () => {
    expect(bookReducer(initialState, { type: types.CLOSE_BOOK })).toEqual({
      ...initialState,
      selected: null
    });
  });

});
