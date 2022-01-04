import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GoHome from '../components/InvoicePage/GoHome';
import Header from '../components/InvoicePage/Header';
import Invoice from '../components/InvoicePage/Invoice';
import data from '../data.json';

const InvoicePage = () => {
  const { id } = useParams();
  const item = data.filter((item) => item.id === id)[0];

  return (
    <Wrapper>
      <GoHome />
      <Header status={item.status} />
      <Invoice invoice={item} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: calc(100% - 48px);
  margin: 0 auto;
  padding-top: 2rem;
`;
export default InvoicePage;
