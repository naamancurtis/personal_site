import React from 'react';
import { shallow } from 'enzyme';
import ThemeToggleButton from './theme-toggler-button.component';

jest.mock('react', () => ({
  // @ts-ignore
  ...jest.requireActual('react'),
  useContext: () => 'test',
}));

describe('<ThemeToggleButton />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<ThemeToggleButton toggleTheme={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
