import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ContinentDetails from '../components/ContinentDetails';

describe('snapshots testing', () => {
  test('snapshots for ContinentDetails component', () => {
    const rendererComponents = renderer
      .create(
        <Provider store={store}>
          <ContinentDetails />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponents).toMatchSnapshot();
  });
});
