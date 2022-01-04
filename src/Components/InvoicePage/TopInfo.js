import React from 'react';
import styled from 'styled-components';

const TopInfo = ({ invoice }) => {
  const {
    id,
    description,
    senderAddress: { city, country, postCode, street },
  } = invoice;
  return (
    <Wrapper>
      <div className="right">
        <h3>
          <span>#</span>
          {id}
        </h3>
        <p>{description}</p>
      </div>
      <div className="left">
        <p>{street}</p>
        <p>{city}</p>
        <p>{postCode}</p>
        <p>{country}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .left {
    margin-top: 30px;

    p {
      line-height: 18px;
      font-size: 11px;
    }
  }

  h3 {
    span {
      color: var(--secondary-color);
    }
  }
`;
export default TopInfo;
