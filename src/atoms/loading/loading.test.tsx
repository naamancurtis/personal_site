import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from './loading.component';

describe('<Loading />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
