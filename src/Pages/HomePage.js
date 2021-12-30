import React from 'react';
import styled from 'styled-components';
import Header from '../Components/HomePage/Header';
import Inputs from '../Components/HomePage/Inputs';

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Inputs />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: calc(100% - 48px);
  margin: 0 auto;
`;
export default HomePage;
