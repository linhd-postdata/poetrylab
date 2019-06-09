// Link.react.test.js
import React from 'react';
import Main from '../../components/Main';
import { create } from 'react-test-renderer';

test('App renders properly', () => {
  const component = create(
    <Main poems={[]} current={0} changeCurrent={jest.fn()} updatePoem={jest.fn()} />,
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

