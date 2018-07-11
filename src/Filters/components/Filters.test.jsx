import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

const setFilters = jest.fn();

const props = {
  filters: {},
  setFilters,
};

describe('DayPartReport', () => {
  const subject = shallow(<Filters {...props} />);

  afterEach(() => {
    setFilters.mockClear();
  });

  it('should receive props', () => {
    expect(subject.instance().props).toEqual(props);
  });

  it('should set state when handleChange is called', () => {
    const target = {
      name: 'name',
      value: 'value',
    };
    subject.instance().handleChange({ target });
    expect(subject.instance().state.name).toBe('value');
  });

  it('should call setFilters action creator when handleSubmit is called', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    subject.setState({
      name: 'name',
      position: 'position',
      age: '20',
    });
    const { mock: { calls } } = setFilters;
    subject.instance().handleSubmit(event);
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({
      name: 'name',
      position: 'position',
      age: '20',
    });
  });
});
