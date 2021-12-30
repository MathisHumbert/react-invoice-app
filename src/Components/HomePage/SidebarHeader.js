import React from 'react';
import styled from 'styled-components';
import GoBack from '../GoBack';

const SidebarHeader = () => {
  return (
    <Wrapper>
      <GoBack />
      <h1>New Invoice</h1>
    </Wrapper>
  );
};

const Wrapper = styled.header``;
export default SidebarHeader;
