import React from 'react';
import styled from 'styled-components';

const ClientInput = () => {
  return (
    <Wrapper>
      <h4>Bill To</h4>
      {/* Name */}
      <div className="single-input">
        <label htmlFor="name">Client's Name</label>
        <input
          type="text"
          name="name"
          id="name"
          // value={sender.name}
          // onChange={(e) => dispatch(handleSenderInfo(e))}
        />
      </div>
      {/* Email */}
      <div className="single-input">
        <label htmlFor="email">Client's email</label>
        <input
          type="text"
          name="email"
          id="email"
          // value={sender.street}
          // onChange={(e) => dispatch(handleSenderInfo(e))}
        />
      </div>
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

const Wrapper = styled.div``;
export default ClientInput;
