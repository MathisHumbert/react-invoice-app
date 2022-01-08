import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInvoices } from '../../redux/actions/dataActions';
import NoInvoices from './NoInvoices';
import SingleInput from './SingleInput';

const AllInvoices = () => {
  const dispatch = useDispatch();
  const { all_invoices, isLoading, isError } = useSelector(
    (state) => state.dataReducer
  );

  useEffect(() => {
    dispatch(getAllInvoices());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  if (all_invoices.length === 0) {
    return <NoInvoices />;
  }

  return (
    <Wrapper>
      {all_invoices.map((item) => {
        return <SingleInput key={item._id} {...item} />;
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
export default AllInvoices;
