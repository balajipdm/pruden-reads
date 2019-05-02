import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/index';
import * as types from '../../actions/types';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to close a book', () => {
    const expectedAction = {
      type: types.CLOSE_BOOK
    };
    expect(actions.closeBook()).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  xit('creates SEARCH_BOOKS_SUCCESS when searching books has been done', () => {
    fetchMock.getOnce('/search/index.xml', {
      payload: {}
    });
   
    const expectedActions = [
      { type: types.SEARCH_BOOKS_REQUEST },
      { type: types.SEARCH_BOOKS_SUCCESS, payload: {} }
    ];
    const store = mockStore({ list: {} });
    return store.dispatch(actions.searchBooks('test')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});