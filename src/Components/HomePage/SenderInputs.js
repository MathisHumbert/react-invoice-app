import React from 'react';
import styled from 'styled-components';
import { handleSenderInfo } from '../../redux/actions/formActions';
import { useDispatch, useSelector } from 'react-redux';

const SenderInputs = () => {
  const dispatch = useDispatch();
  const { sender } = useSelector((state) => state.formReducer);

  return (
    <Wrapper>
      <h4>Bill From</h4>
      {/* Street Address */}
      <div className="single-input">
        <label htmlFor="street">Street Adress</label>
        <input
          type="text"
          name="street"
          id="street"
          value={sender.street}
          onChange={(e) => dispatch(handleSenderInfo(e))}
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
            value={sender.city}
            onChange={(e) => dispatch(handleSenderInfo(e))}
          />
        </div>
        {/* Post Code */}
        <div className="single-input">
          <label htmlFor="postCode">Post Code</label>
          <input
            type="text"
            name="postCode"
            id="postCode"
            value={sender.postCode}
            onChange={(e) => dispatch(handleSenderInfo(e))}
          />
        </div>
        {/* Country */}
        <div className="single-input">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={sender.country}
            onChange={(e) => dispatch(handleSenderInfo(e))}
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
