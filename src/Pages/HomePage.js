import React from 'react';
import styled from 'styled-components';
import Header from '../components/HomePage/Header';
import Inputs from '../components/HomePage/Inputs';
import SidebarNew from '../components/HomePage/SidebarNew';

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Inputs />
      <SidebarNew />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: calc(100% - 48px);
  margin: 0 auto;
`;
export default HomePage;
