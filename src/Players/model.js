import moment from 'moment';

const today = moment();

export const getAge = (date) => {
  const birth = moment(date, 'YYYY-MM-D');
  return today.diff(birth, 'years');
};
