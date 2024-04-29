import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    // Shallow render the App component before each test
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders a div with the class App-header', () => {
    expect(wrapper.find('div.App-header').length).toEqual(1);
  });

  it('renders a div with the class App-body', () => {
    expect(wrapper.find('div.App-body').length).toEqual(1);
  });

  it('renders a div with the class App-footer', () => {
    expect(wrapper.find('div.App-footer').length).toEqual(1);
  });
});
