import React from 'react';
import styled from 'styled-components';
import SenderInputs from './SenderInputs';

const NewInvoiceForm = () => {
  return (
    <Wrapper>
      <SenderInputs />
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
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-color);

    &:focus {
      outline: none;
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
