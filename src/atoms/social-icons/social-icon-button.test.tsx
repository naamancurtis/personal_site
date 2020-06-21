import React from 'react';
import { shallow } from 'enzyme';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './social-icon-button.component';

describe('<GitHubIcon />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<GitHubIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<LinkedInIcon />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<LinkedInIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<MailIcon />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<MailIcon openModal={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
