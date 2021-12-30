import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa';
import FilterForm from './FilterForm';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <div className="left">
        <h1>Invoices</h1>
        <p>7 invoices</p>
      </div>
      <div className="right">
        <div>
          <button type="button" className="filter-btn">
            <p>Filter</p>
            {isActive ? (
              <FaChevronUp className="icon" />
            ) : (
              <FaChevronDown className="icon" />
            )}
          </button>
          <FilterForm />
        </div>
        <button type="button" className="new-btn">
          <span>
            <FaPlus className="icon" />
          </span>
          <p>New</p>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  h1 {
    margin-bottom: 4px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 18px;
    position: relative;
  }

  .filter-btn {
    background: transparent;
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 8px;
    color: var(--primary-color);

    .icon {
      font-size: 9px;
      color: var(--purple-color);
    }
  }

  .new-btn {
    background: var(--purple-color);
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--white-color);
    border-radius: 20px;
    line-height: 0;
    padding: 6px;
    padding-right: 10px;

    span {
      width: 32px;
      height: 32px;
      background: var(--white-color);
      color: var(--purple-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 12px;
      }
    }
  }
`;
export default Header;
