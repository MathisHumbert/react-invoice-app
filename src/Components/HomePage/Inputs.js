import React from 'react';
import styled from 'styled-components';
import data from '../../data.json';
import NoInputs from './NoInputs';
import SingleInput from './SingleInput';
// const data = [];
const Inputs = () => {
  if (data.length === 0) {
    return <NoInputs />;
  } else {
    return (
      <Wrapper>
        {data.map((item) => {
          return <SingleInput key={item.id} {...item} />;
        })}
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-bottom: 2rem;
`;
export default Inputs;
