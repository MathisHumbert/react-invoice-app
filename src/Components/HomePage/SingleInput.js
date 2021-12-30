import React from 'react';
import styled from 'styled-components';
import StatusButton from '../StatusButton';
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
      <p className="date">{date}</p>
      <p className="name">{clientName}</p>
      <h3>£{total}</h3>
      <StatusButton status={status} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--main-bcg);
  height: 134px;
  width: 100%;
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0, 25);

  h4 {
    position: absolute;
    left: 24px;
    top: 24px;
  }

  .name {
    position: absolute;
    right: 24px;
    top: 24px;
  }

  .date {
    position: absolute;
    left: 24px;
    bottom: 52px;
  }

  h3 {
    position: absolute;
    left: 24px;
    bottom: 24px;
  }

  button {
    position: absolute;
    right: 24px;
    bottom: 24px;
  }
`;
export default SingleInput;
