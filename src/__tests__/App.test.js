// Link.react.test.js
import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';

test('App renders properly', () => {
  const component = create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});