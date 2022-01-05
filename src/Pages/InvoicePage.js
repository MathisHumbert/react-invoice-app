import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleInvoice } from '../redux/actions/dataActions';
import styled from 'styled-components';
import DeleteAside from '../components/InvoicePage/DeleteAside';
import Footer from '../components/InvoicePage/Footer';
import GoHome from '../components/InvoicePage/GoHome';
import Header from '../components/InvoicePage/Header';
import Invoice from '../components/InvoicePage/Invoice';
import SidebarEdit from '../components/InvoicePage/SidebarEdit';

const InvoicePage = () => {
  const dispatch = useDispatch();
  const { single_invoice, isLoading, isError } = useSelector(
    (state) => state.dataReducer
  );
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getSingleInvoice(id));
    // eslint-disable-next-line
  }, []);

  if (isLoading || single_invoice.length === 0) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <Wrapper>
      <GoHome />
      <Header status={single_invoice.status} />
      <Invoice />
      <Footer />
      <DeleteAside />
      <SidebarEdit id={id} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: calc(100% - 48px);
  min-height: calc(100vh - 72px);
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 150px;
  position: relative;
`;
export default InvoicePage;
