import React from 'react';
import styled from 'styled-components';
import ClientInputs from './ClientInputs';
import SenderInputs from './SenderInputs';
import ItemInputs from './ItemInputs';
import NewBtn from './NewBtn';
import EditBtn from './EditBtn';

const InvoiceForm = ({ type }) => {
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <SenderInputs />
      <ClientInputs />
      <ItemInputs />
      {type === 'new' ? <NewBtn /> : <EditBtn />}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding-top: 33px;

  .single-input {
    padding-top: 24px;
  }

  h4 {
    color: var(--purple-color);
  }

  input {
    width: 100%;
    margin-top: 10px;
    border: 1px solid var(--border-color);
    padding: 17px 0 17px 20px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-color);
    line-height: 0;
    letter-spacing: -0.25px;
    font-family: 'Spartan', sans-serif;
    transition: border 0.3s linear;

    &:focus {
      outline: none;
      border: 1px solid var(--purple-color);
    }

    &.empty {
      border: 1px solid var(--red-color);
    }

    &::placeholder {
      color: var(--primary-color);
      opacity: 0.5;
    }
  }

  label {
    color: var(--secondary-color);
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
  }
`;
export default InvoiceForm;
