import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    // Shallow render the App component before each test
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders render three list items', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });
	
  it('renders the text "Here is the list of notifications"', () => {
	const textNode = wrapper.find('p').childAt(0).text().trim();
    expect(textNode).toEqual('Here is the list of notifications');
  });
});
