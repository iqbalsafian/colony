import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store/index';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Component: App', () => {
  const div = document.createElement('div');
  it('renders without crashing', () => {
    ReactDOM.render(
      <Provider  store={store}>
        <App />
      </Provider>, div)
  })

  it('renders on enzyme without crashing', () => {
    mount(
      <Provider  store={store}>
        <App />
      </Provider>
    )
  })
})
