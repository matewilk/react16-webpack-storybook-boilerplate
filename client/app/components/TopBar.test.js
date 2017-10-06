import React from 'react';
import TopBar from './TopBar';
import renderer from 'react-test-renderer';

test('should render AppBar component', () => {
  const component = renderer.create(
    <TopBar/>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});