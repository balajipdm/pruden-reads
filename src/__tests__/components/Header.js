import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAtrr } from '../../utils';
import Header from '../../components/Header';

const setUp = () => {
  const component = shallow(<Header />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render header element', () => {
    const wrapper = findByTestAtrr(component, '.mdl-layout__header');
    expect(wrapper.length).toBe(1);
  });
  it('should render header title', () => {
    const header = findByTestAtrr(component, '.mdl-layout-title');
    expect(header.length).toBe(1);
    expect(header.text()).toBe('PrudenReads - GoodReads Search');
    expect(header.text().length).toBe(30);
  });
});