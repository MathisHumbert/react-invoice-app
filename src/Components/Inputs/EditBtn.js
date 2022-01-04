import React from 'react';
import styled from 'styled-components';

const EditBtn = () => {
  return (
    <Wrapper>
      <button className="sidebar-btn cancel">Cancel</button>
      <button className="sidebar-btn send">Save & Send</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--main-bcg);
  display: flex;
  justify-content: flex-end;
  margin-top: 88px;
  padding: 24px 0;
  gap: 8px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    top: -64px;
    left: -24px;
    width: calc(100% + 48px);
    height: 64px;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }

  .cancel {
    background: var(--ternary-bcg);
    color: var(--secondary-color);
  }

  .send {
    background: var(--purple-color);
    color: var(--white-color);
  }
`;
export default EditBtn;
