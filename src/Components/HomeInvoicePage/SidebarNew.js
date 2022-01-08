import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GoBack from './GoBack';
import InvoiceForm from '../Inputs/InvoiceForm';

const SidebarNew = () => {
  const { isNewSidebarOpen } = useSelector((state) => state.toggleReducer);

  return (
    <Wrapper className={isNewSidebarOpen ? 'open' : null}>
      <div className='container'>
        <header>
          <GoBack />
          <h1>New Invoice</h1>
        </header>
        <InvoiceForm type='new' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 72px;
  left: 0;
  bottom: 0;
  width: 0;
  background: var(--main-bcg);
  padding-top: 2rem;
  overflow: scroll;
  overflow-x: hidden;
  transition: width 0.5s linear;

  &.open {
    width: 100%;

    .container {
      opacity: 1;
    }
  }

  .container {
    padding: 0 24px;
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  header {
    h1 {
      margin-top: 24px;
      letter-spacing: -0.5;
      line-height: 32px;
      font-size: 24px;
    }
  }
`;

export default SidebarNew;
