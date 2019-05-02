import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAtrr } from '../../utils';
import App from '../../components/App';

const setUp = () => {
  const component = shallow(<App />);
  return component;
};

describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render layout', () => {
    const wrapper = findByTestAtrr(component, '.mdl-layout');
    expect(wrapper.length).toBe(1);
  });
  it('should render layout content', () => {
    const wrapper = findByTestAtrr(component, '.mdl-layout__content');
    expect(wrapper.length).toBe(1);
    expect(wrapper).toEqual({});
  });
});