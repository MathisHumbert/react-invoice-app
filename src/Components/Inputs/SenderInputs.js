import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { handleSenderInfo } from '../../redux/actions/formActions';

const SenderInputs = () => {
  const dispatch = useDispatch();
  const { senderAddress } = useSelector((state) => state.formReducer);

  return (
    <Wrapper>
      <h4>Bill From</h4>
      {/* Street Address */}
      <div className="single-input">
        <label htmlFor="street">Street Address</label>
        <input
          type="text"
          name="street"
          id="street"
          value={senderAddress.street}
          onChange={(e) => dispatch(handleSenderInfo(e))}
          className="input"
        />
      </div>
      {/* 3 inputs */}
      <div className="input-container">
        {/* City */}
        <div className="single-input">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={senderAddress.city}
            onChange={(e) => dispatch(handleSenderInfo(e))}
            className="input"
          />
        </div>
        {/* Post Code */}
        <div className="single-input">
          <label htmlFor="postCode">Post Code</label>
          <input
            type="text"
            name="postCode"
            id="postCode"
            value={senderAddress.postCode}
            onChange={(e) => dispatch(handleSenderInfo(e))}
            className="input"
          />
        </div>
        {/* Country */}
        <div className="single-input">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={senderAddress.country}
            onChange={(e) => dispatch(handleSenderInfo(e))}
            className="input"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;

    .single-input:last-child {
      grid-column: 1 / 3;
    }
  }
`;
export default SenderInputs;
