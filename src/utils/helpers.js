import { months } from './constants';

export const formatDate = (date) => {
  const splitDate = date.split('-');
  return `${splitDate[2]} ${months[splitDate[1]]} ${splitDate[0]}`;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);
};

export const getTodayDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${year}-${month >= 10 ? month : `0${month}`}-${
    day >= 10 ? day : `0${day}`
  }`;
};

export const getFullDate = (date) => {
  let splitDate = date.split('-');
  const year = Number(splitDate[0]);
  const month = Number(splitDate[1]) - 1;
  const day = Number(splitDate[2]);
  return new Date(year, month, day);
};

export const getUpdatedDate = (date, day) => {
  return getTodayDate(
    new Date(date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000))
  );
};

export const getTotalAmount = (items) => {
  return items.reduce((acc, curr) => {
    acc += curr.total;
    return acc;
  }, 0);
};

export const checkEmptyInput = () => {
  let emptyFlag = false;
  const inputs = document.querySelectorAll('.input');
  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add('empty');
      emptyFlag = true;
      console.log(input);
    } else {
      input.classList.remove('empty');
    }
  });
  return emptyFlag;
};

// input text date helper function
// export const checkValidDate = (date) => {
//   let splitDate = date.split('-');
//   const year = Number(splitDate[0]);
//   const month = Number(splitDate[1]) - 1;
//   const day = Number(splitDate[2]);

//   const fullDate = new Date(year, month, day);
//   if (isNaN(fullDate.getDay()) || month > 11 || day > 31) {
//     return 'error';
//   } else {
//     return `${fullDate.getFullYear()}-${
//       fullDate.getMonth() + 1
//     }-${fullDate.getDate()}`;
//   }
// };
