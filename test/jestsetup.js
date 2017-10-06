import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter

Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
// the function below gets rid of react-polyfills warning while running tests
global.requestAnimationFrame = function (cb) {
  return setTimeout(cb, 0);
};
// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};