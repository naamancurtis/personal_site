import React from 'react';
import { shallow } from 'enzyme';
import FormError from './form-error.component';

describe('<FormError />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<FormError message={'test'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
