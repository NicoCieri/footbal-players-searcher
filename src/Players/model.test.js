import { getAge } from './model';

describe('model', () => {
  it('should return age', () => {
    expect(getAge('1980/07/11')).toBe(38);
  });
});
