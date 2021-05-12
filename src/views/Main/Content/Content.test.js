import React from 'react';
import renderer from 'react-test-renderer';
import { Content } from './Content';

jest.mock('react-router-dom', () => ({
  Redirect: () => () => <div>Redirect to map</div>,
  Route: ({ children }) => children,
  Switch: ({ children }) => children,
}));
jest.mock('../../../components/Loading', () => () => <div>Loading</div>);
jest.mock('../../../modules/CRUD', () => () => <div>GeoCrud</div>);

it('should render correctly', () => {
  const tree = renderer.create(<Content />).toJSON();
  expect(tree).toMatchSnapshot();
});
