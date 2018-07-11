import { getAllFilters } from './selectors';

describe('selectors', () => {
  it('should return all the filters', () => {
    const state = {
      filters: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
    const expectedResult = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(getAllFilters(state)).toEqual(expectedResult);
  });
});
