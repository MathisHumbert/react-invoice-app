import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleClientInfo,
  handleGeneralInfo,
} from '../../redux/actions/formActions';
import DateInput from './DateInput';
import TermInput from './TermInput';

const ClientInputs = () => {
  const dispatch = useDispatch();
  const { clientAddress, clientName, clientEmail, description } = useSelector(
    (state) => state.formReducer
  );

  return (
    <Wrapper>
      <h4>Bill To</h4>
      {/* Name */}
      <div className="single-input">
        <label htmlFor="name">Client's Name</label>
        <input
          type="text"
          name="clientName"
          id="name"
          value={clientName}
          onChange={(e) => dispatch(handleGeneralInfo(e))}
          className="input"
        />
      </div>
      {/* Email */}
      <div className="single-input">
        <label htmlFor="email">Client's Email</label>
        <input
          type="text"
          name="clientEmail"
          id="email"
          value={clientEmail}
          onChange={(e) => dispatch(handleGeneralInfo(e))}
          className="input"
        />
      </div>
      {/* Street Address */}
      <div className="single-input">
        <label htmlFor="street">Street Address</label>
        <input
          type="text"
          name="street"
          id="street"
          value={clientAddress.street}
          onChange={(e) => dispatch(handleClientInfo(e))}
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
            value={clientAddress.city}
            onChange={(e) => dispatch(handleClientInfo(e))}
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
            value={clientAddress.postCode}
            onChange={(e) => dispatch(handleClientInfo(e))}
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
            value={clientAddress.country}
            onChange={(e) => dispatch(handleClientInfo(e))}
            className="input"
          />
        </div>
      </div>
      {/* 2 inputs */}
      <div className="input-two-container">
        {/* Date */}
        <div className="single-input">
          <label htmlFor="date">Invoice Date</label>
          <DateInput />
        </div>
        {/* Terms */}
        <div className="single-input">
          <label>Payement Terms</label>
          <TermInput />
        </div>
      </div>
      {/* Description */}
      <div className="single-input">
        <label htmlFor="description">Project Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => dispatch(handleGeneralInfo(e))}
          className="input"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;

  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;

    .single-input:last-child {
      grid-column: 1 / 3;
    }
  }

  .input-two-container {
    margin-top: 16px;
  }

  #date {
    cursor: pointer;
  }
`;
export default ClientInputs;
