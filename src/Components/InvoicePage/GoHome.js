import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GoHome = () => {
  return (
    <Wrapper>
      <Link to="/">
        <FaChevronLeft className="icon" />
        <h4>Go back</h4>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: transparent;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 24px;
  }

  h4 {
    color: var(--primary-color);
    margin-top: 3px;
  }

  .icon {
    font-size: 9px;
    color: var(--purple-color);
  }
`;
export default GoHome;
