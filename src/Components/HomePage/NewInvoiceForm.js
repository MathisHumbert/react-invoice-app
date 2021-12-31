import React from 'react';
import styled from 'styled-components';
import ClientInputs from './ClientInputs';
import SenderInputs from './SenderInputs';

const NewInvoiceForm = () => {
  return (
    <Wrapper>
      <SenderInputs />
      <ClientInputs />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding-top: 33px;
  padding-bottom: 20rem;

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

    &:focus {
      outline: none;
      border: 1px solid var(--purple-color);
    }

    &.error {
      border: 1px solid var(--red-color);
    }
  }

  label {
    color: var(--secondary-color);
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
  }
`;
export default NewInvoiceForm;
