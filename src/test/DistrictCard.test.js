import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import DistrictCard from '../components/DistrictCard';

import kinderGartenData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('DistrictCard', () => {
  let wrapper;

  const mockState = {
    category: new DistrictRepository(kinderGartenData),
    loading: false
  };
  const card = mockState.category.stats['YUMA SCHOOL DISTRICT 1'];

  beforeEach(() => {
    wrapper = shallow(<DistrictCard {...card} />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DistrictCard {...card} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
