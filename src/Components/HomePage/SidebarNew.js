import React from 'react';
import styled from 'styled-components';
import GoBack from '../GoBack';
import NewInvoiceForm from './NewInvoiceForm';

const SidebarNew = () => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <GoBack />
          <h1>New Invoice</h1>
        </header>
        <NewInvoiceForm />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 72px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--main-bcg);
  padding: 2rem 0;
  overflow: scroll;

  .container {
    padding: 0 24px;
  }

  header {
    h1 {
      margin-top: 24px;
      letter-spacing: -0.5;
      line-height: 32px;
      font-size: 24px;
    }
  }
`;
export default SidebarNew;
