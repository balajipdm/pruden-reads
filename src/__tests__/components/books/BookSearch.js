import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAtrr, checkProps } from '../../../utils';
import BookSearch from '../../components/books/BookSearch';

const setUp = (props = {}) => {
  const component = shallow(<BookSearch {...props} />);
  return component;
};

describe('BookSearch Component', () => {
  describe('Checking PropTypes', () => {
    it('it should not throw warning', () => {
      const expectedProps = {
        searchBooks: jest.fn(),
        books: [],
        openBook: jest.fn()
      };
      const propsErr = checkProps(BookSearch, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have No Props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    xit('should not render with empty props', () => {
      const component = findByTestAtrr(wrapper, '.book-search');
      expect(component.length).toBe(0);
    });
  });

});