import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GoBack from '../GoBack';
import NewInvoiceForm from './NewInvoiceForm';

const SidebarNew = () => {
  const { isNewSidebarOpen } = useSelector((state) => state.toggleReducer);
  console.log(isNewSidebarOpen);
  return (
    <Wrapper className={isNewSidebarOpen ? 'open' : null}>
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
  width: 0;
  background: var(--main-bcg);
  padding: 2rem 0;
  overflow: scroll;
  transition: width 0.5s linear;

  &.open {
    width: 100%;
  }

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
