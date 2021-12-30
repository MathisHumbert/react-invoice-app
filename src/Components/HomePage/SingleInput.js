import React from 'react';
import styled from 'styled-components';
const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const SingleInput = ({ id, clientName, createdAt, items, status }) => {
  const { total } = items[0];
  const splitDate = createdAt.split('-');
  const date = `Due ${splitDate[2]} ${months[splitDate[1]]} ${splitDate[0]}`;

  return (
    <Wrapper>
      <h4>
        <span>#</span>
        {id}
      </h4>
      <p>{date}</p>
      <p>{clientName}</p>
      <h3>£{total}</h3>
      <button>{status}</button>
    </Wrapper>
  );
};

const Wrapper = styled.article``;
export default SingleInput;
