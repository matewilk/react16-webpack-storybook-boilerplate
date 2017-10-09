import React from 'react';
import TopBar from './TopBar';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

test('should render AppBar component', () => {
  const component = renderer.create(
    <MuiThemeProvider>
      <TopBar/>
    </MuiThemeProvider>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});