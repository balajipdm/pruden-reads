import checkPropTypes from 'check-prop-types';

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component, expectedProps, 'props', component.name);
  return propsErr;
};

export const truncate = (text, len = 15) => {
  return text.length > len ? text.substring(0, len - 1) + '...' : text;
};