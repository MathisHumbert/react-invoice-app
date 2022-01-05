import React from 'react';
import styled from 'styled-components';
import { closeNewSidebar } from '../../redux/actions/toggleActions';
import { resetItem } from '../../redux/actions/formActions';
import { createInvoice } from '../../redux/actions/dataActions';
import { useDispatch, useSelector } from 'react-redux';
import { checkEmptyInput } from '../../utils/helpers';

const NewBtn = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.formReducer);
  console.log(data);

  return (
    <Wrapper>
      <button
        className="sidebar-btn discard"
        onClick={() => {
          dispatch(resetItem());
          dispatch(closeNewSidebar());
        }}
      >
        Discard
      </button>
      <button
        className="sidebar-btn draft"
        onClick={() => {
          dispatch(createInvoice(data));
          dispatch(resetItem());
          dispatch(closeNewSidebar());
        }}
      >
        Save as Draft
      </button>
      <button
        className="sidebar-btn send"
        onClick={() => {
          if (!checkEmptyInput(data.items)) {
            const invoice = { ...data, status: 'pending' };
            dispatch(createInvoice(invoice));
            dispatch(closeNewSidebar());
            dispatch(resetItem());
          }
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

  .discard {
    background: var(--ternary-bcg);
    color: var(--secondary-color);
  }

  .draft {
    background: var(--secondary-bcg);
    color: var(--special-color);
  }

  .send {
    background: var(--purple-color);
    color: var(--white-color);
  }
`;
export default NewBtn;
