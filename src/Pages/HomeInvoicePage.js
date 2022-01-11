import React from 'react';
import styled from 'styled-components';
import { Header, AllInvoices, SidebarNew } from '../components/HomeInvoicePage';

const HomeInvoicePage = () => {
  return (
    <Wrapper>
      <Header />
      <AllInvoices />
      <SidebarNew />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: calc(100% - 48px);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: calc(100% - 96px);
  }
`;
export default HomeInvoicePage;
