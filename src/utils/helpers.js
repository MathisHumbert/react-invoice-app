import { months } from './constants';

export const formatDate = (date) => {
  const splitDate = date.split('-');
  return `Due ${splitDate[2]} ${months[splitDate[1]]} ${splitDate[0]}`;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);
};

export const getTodayDate = () => {
  const month = new Date().getMonth();
  const day = new Date().getDay();
  const year = new Date().getFullYear();

  return `${year}-${month > 10 ? month : `0${month}`}-${
    day > 10 ? day : `0${day}`
  }`;
};
