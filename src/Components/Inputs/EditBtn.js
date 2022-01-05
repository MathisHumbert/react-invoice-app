import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { closeEditSidebar } from '../../redux/actions/toggleActions';
import { resetItem } from '../../redux/actions/formActions';
import { checkEmptyInput } from '../../utils/helpers';

const EditBtn = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button
        type="button"
        className="sidebar-btn cancel"
        onClick={() => {
          dispatch(closeEditSidebar());
          dispatch(resetItem());
        }}
      >
        Cancel
      </button>
      <button
        className="sidebar-btn send"
        type="button"
        onClick={() => {
          checkEmptyInput();
        }}
      >
        Save & Send
      </button>
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
