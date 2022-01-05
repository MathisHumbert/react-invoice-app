import React from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleItemInfo,
  createNewItem,
  deleteItem,
} from '../../redux/actions/formActions';

const ItemInput = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.formReducer);

  return (
    <Wrapper>
      <h2>Item List</h2>
      {items.map((item, index) => {
        const { id, name, price, quantity, total } = item;
        return (
          <div
            className={
              index === 0 ? 'first input-container' : 'input-container'
            }
            key={id}
          >
            {/* Name */}
            <div className="single-input">
              <label htmlFor="name">Item Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => dispatch(handleItemInfo(e, id))}
                className="input"
              />
            </div>
            {/* Quantity */}
            <div className="single-input">
              <label htmlFor="quantity">Qty.</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="1"
                value={quantity}
                onChange={(e) => dispatch(handleItemInfo(e, id))}
                className="input"
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
                value={price}
                onChange={(e) => dispatch(handleItemInfo(e, id))}
                className="input"
              />
            </div>
            {/* Total */}
            <div className="single-input total">
              <p>Total</p>
              <p>{total}</p>
            </div>
            <div
              className="icon-container"
              onClick={() => dispatch(deleteItem(id))}
            >
              <FaTrash className="icon" />
            </div>
          </div>
        );
      })}
      <button
        type="button"
        className="sidebar-btn"
        onClick={() => dispatch(createNewItem())}
      >
        + Add New Item
      </button>
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
    padding-top: 24px;

    .single-input:first-child {
      grid-column: 1 / 5;
    }

    &.first {
      padding-top: 0;
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

  .sidebar-btn {
    margin-top: 48px;
    background: var(--ternary-bcg);
    color: var(--secondary-color);
    padding: 0;
    width: 100%;
  }
`;
export default ItemInput;
