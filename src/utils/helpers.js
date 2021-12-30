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
