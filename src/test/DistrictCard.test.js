import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DistrictCard from '../components/DistrictCard';

import kinderGartenData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('DistrictCard', () => {
  let wrapper;
  let toggleSelected;

  const mockState = {
    categoryData: new DistrictRepository(kinderGartenData)
  };
  const card = mockState.categoryData.stats['YUMA SCHOOL DISTRICT 1'];

  beforeEach(() => {
    toggleSelected = jest.fn();
    wrapper = shallow(
      <DistrictCard
        {...card}
        toggleSelected={toggleSelected}
        selected={false}
        categoryData={mockState.categoryData}
        selectedCards={true}
      />
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DistrictCard
        {...card}
        toggleSelected={toggleSelected}
        selected={false}
        categoryData={mockState.categoryData}
        selectedCards={true}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should call the toggleSelected function when clicked', () => {
    wrapper.find('.district-card').simulate('click');
    expect(toggleSelected).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
