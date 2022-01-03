import React from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

const ItemInput = () => {
  return (
    <Wrapper>
      <h2>Item List</h2>
      <div className="input-container">
        {/* Name */}
        <div className="single-input">
          <label htmlFor="name">Item Name</label>
          <input type="text" name="name" id="name" />
        </div>
        {/* Quantity */}
        <div className="single-input">
          <label htmlFor="quantity">Qty.</label>
          <input type="number" name="quantity" id="quantity" />
        </div>
        {/* Price */}
        <div className="single-input">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" />
        </div>
        {/* Total */}
        <div className="single-input">
          <p>Total</p>
          <p>156.00</p>
        </div>
        <FaTrash className="icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 66px;

  h2 {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.38px;
    color: #777f98;
  }

  .icon {
    color: #888eb0;
  }
`;
export default ItemInput;
