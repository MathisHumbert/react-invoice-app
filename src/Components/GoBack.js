import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

const GoBack = () => {
  return (
    <Wrapper>
      <FaChevronLeft className="icon" />
      <h4>Go back</h4>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  line-height: 0;
  gap: 24px;

  h4 {
    color: var(--primary-color);
  }

  .icon {
    font-size: 9px;
    color: var(--purple-color);
  }
`;
export default GoBack;
