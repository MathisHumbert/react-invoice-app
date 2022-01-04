import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleItem } from '../redux/actions/dataActions';
import styled from 'styled-components';
import DeleteAside from '../components/InvoicePage/DeleteAside';
import Footer from '../components/InvoicePage/Footer';
import GoHome from '../components/InvoicePage/GoHome';
import Header from '../components/InvoicePage/Header';
import Invoice from '../components/InvoicePage/Invoice';
import SidebarEdit from '../components/InvoicePage/SidebarEdit';
import data from '../data.json';

const InvoicePage = () => {
  const dispatch = useDispatch();
  const { single_invoice, isLoading } = useSelector(
    (state) => state.dataReducer
  );
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getSingleItem(data, id));
    // eslint-disable-next-line
  }, []);

  console.log(single_invoice);

  if (isLoading) {
    return <h1>Loading...</h1>;
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
