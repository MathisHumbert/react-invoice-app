import React from 'react';
import styled from 'styled-components';
import TopInfo from './TopInfo';
import BottomInfo from './BottomInfo';
import PriceInfo from './PriceInfo';

const Invoice = ({ invoice }) => {
  return (
    <Wrapper>
      <TopInfo invoice={invoice} />
      <BottomInfo invoice={invoice} />
      <PriceInfo invoice={invoice} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  background: var(--main-bcg);
  padding: 24px;
  margin-top: 13px;
  border-radius: 8px;
`;
export default Invoice;
