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
`;
export default InvoiceForm;
