import React from 'react';
import styled from 'styled-components';
import Header from '../components/HomeInvoicePage/Header';
import AllInvoices from '../components/HomeInvoicePage/AllInvoices';
import SidebarNew from '../components/HomeInvoicePage/SidebarNew';

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
`;
export default HomeInvoicePage;
