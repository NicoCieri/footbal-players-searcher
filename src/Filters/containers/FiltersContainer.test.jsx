import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import FiltersContainer from './FiltersContainer';

jest.mock('../actions', () => ({
  setFilters: jest.fn().mockImplementation(() => ({
    type: 'filters/SET_FILTERS',
  })),
}));

const testState = {
  filters: {
    name: 'name',
    position: 'position',
  },
};

describe('FiltersContainer', () => {
  const mockStore = configureStore()(testState);
  const subject = shallow(<FiltersContainer store={mockStore} />);

  beforeEach(() => {
    mockStore.clearActions();
  });

  it('should map state filters to props', () => {
    expect(subject.props().filters).toEqual({
      name: 'name',
      position: 'position',
    });
  });

  it('should map setFilters action creator to props', () => {
    subject.props().setFilters();
    expect(mockStore.getActions()).toEqual([{ type: 'filters/SET_FILTERS' }]);
  });
});
