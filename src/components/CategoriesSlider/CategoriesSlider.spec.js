import React from 'react';
import { shallow } from 'enzyme';

import { LinearProgress } from '@material-ui/core';

import CategoriesSlider from './CategoriesSlider';

import { Slide } from './styled';

import { render } from '../../utils/test-utils';

const categories = [
  {
    id: 1,
    name: 'Pizza',
    images: ['http://localhost:3030/api/attachments/1.Pizza.jpg'],
  },
  {
    id: 4,
    name: 'Drink',
    images: ['http://localhost:3030/api/attachments/2.Cat.jpg'],
  },
];

describe('CategoriesSlider', () => {
  let wrapperWithData, wrapperWithNoData;

  beforeEach(() => {
    wrapperWithData = render(<CategoriesSlider />, {
      initialState: { category: { list: categories, isLoading: false } },
    });
    wrapperWithNoData = render(<CategoriesSlider />, {
      initialState: { category: { list: [], isLoading: true } },
    });
  });

  it('renders without crashing', () => {
    expect(wrapperWithData.exists()).toBe(true);
    expect(wrapperWithNoData.exists()).toBe(true);
  });

  // it('renders Slide', () => {
  //   console.log(wrapperWithData.contains('.slide'));
  //   expect(wrapperWithData.find('Slide')).toHaveLength(2);
  // });

  // it('renders loader with no data', () => {
  //   const wrapper = render(<CategoriesSlider />, {
  //     initialState: {
  //       category: {
  //         list: [],
  //         isLoading: true,
  //       },
  //     },
  //   });

  //   expect(wrapper.find(<LinearProgress />).exists()).toBe(true);
  // });
});
