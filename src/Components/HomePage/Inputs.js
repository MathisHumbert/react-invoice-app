import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItems } from '../../redux/actions/dataActions';
import NoInvoices from './NoInvoices';
import SingleInput from './SingleInput';
import data from '../../data.json';

const Inputs = () => {
  const dispatch = useDispatch();
  const { all_invoices, isLoading } = useSelector((state) => state.dataReducer);

  React.useEffect(() => {
    dispatch(getAllItems(data));
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (data.length === 0) {
    return <NoInvoices />;
  }

  return (
    <Wrapper>
      {all_invoices.map((item) => {
        return <SingleInput key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-bottom: 2rem;
`;
export default Inputs;
