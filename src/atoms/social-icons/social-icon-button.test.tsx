import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './social-icon-button.component';
import { SocialWrapperWithLabel } from './social-icon-button.styles';

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

  it('expect to openModal', () => {
    const mockOpenModal = jest.fn(() => {});
    const wrapper = mount(<MailIcon openModal={mockOpenModal} />);
    wrapper.find(SocialWrapperWithLabel).simulate('click');
    expect(mockOpenModal).toHaveBeenCalled();
    expect(mockOpenModal).toHaveBeenCalledTimes(1);
  });
});
