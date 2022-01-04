import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../../utils/helpers';

const BottomInfo = ({ invoice }) => {
  const {
    createdAt,
    paymentDue,
    clientName,
    clientAddress: { city, country, postCode, street },
    clientEmail,
  } = invoice;

  return (
    <Wrapper>
      <div className="one">
        <div className="top">
          <p>Invoice Date</p>
          <h3>{formatDate(createdAt)}</h3>
        </div>
        <div className="bottom">
          <p>Payment Due</p>
          <h3>{formatDate(paymentDue)}</h3>
        </div>
      </div>
      <div className="two">
        <p>Bill To</p>
        <h3>{clientName}</h3>
        <p>{street}</p>
        <p>{city}</p>
        <p>{postCode}</p>
        <p>{country}</p>
      </div>
      <div className="three">
        <p>Sent to</p>
        <h3>{clientEmail}</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 42px;

  h3 {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.31px;
    margin-top: 12px;
  }

  .one {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .two {
    h3 {
      margin-bottom: 10px;
    }

    p {
      line-height: 18px;
      font-size: 11px;

      &:first-child {
        font-size: 12px;
      }
    }
  }
`;
export default BottomInfo;
