import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ItemInput = () => {
  const { items } = useSelector((state) => state.formReducer);

  return (
    <Wrapper>
      <h2>Item List</h2>
      {items.map((item, index) => {
        console.log(item);
        return (
          <div className="input-container" key={index}>
            {/* Name */}
            <div className="single-input">
              <label htmlFor="name">Item Name</label>
              <input type="text" name="name" id="name" />
            </div>
            {/* Quantity */}
            <div className="single-input">
              <label htmlFor="quantity">Qty.</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="1"
              />
            </div>
            {/* Price */}
            <div className="single-input">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="156.99"
              />
            </div>
            {/* Total */}
            <div className="single-input" className="total">
              <p>Total</p>
              <p>00</p>
            </div>
            <div className="icon-container">
              <FaTrash className="icon" />
            </div>
          </div>
        );
      })}
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

  .input-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    column-gap: 1rem;

    .single-input:first-child {
      grid-column: 1 / 5;
    }
  }

  .icon-container {
    position: relative;

    .icon {
      cursor: pointer;
      position: absolute;
      bottom: 16px;
      right: 7px;
      color: #888eb0;
      font-size: 15px;
    }
  }

  .total {
    padding-top: 24px;

    p:last-child {
      padding-top: 32.5px;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
export default ItemInput;
