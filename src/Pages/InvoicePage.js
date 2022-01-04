import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GoHome from '../components/InvoicePage/GoHome';
import data from '../../data.json';

const InvoicePage = () => {
  const { id } = useParams();
  console.log(id);
  const item = '';
  return (
    <Wrapper>
      <GoHome />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: calc(100% - 48px);
  margin: 0 auto;
  padding-top: 2rem;
`;
export default InvoicePage;
