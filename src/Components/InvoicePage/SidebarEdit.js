import { useSelector } from 'react-redux';
import styled from 'styled-components';
import InvoiceForm from '../Inputs/InvoiceForm';
import GoBack from './GoBack';

const SidebarEdit = ({ id }) => {
  const { isEditSidebarOpen } = useSelector((state) => state.toggleReducer);

  return (
    <Wrapper className={isEditSidebarOpen ? 'open' : null}>
      <div className='container'>
        <header>
          <GoBack />
          <h1>
            Edit <span>#</span>
            {id.substring(18, 24).toUpperCase()}
          </h1>
        </header>
        <InvoiceForm type='edit' />
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
  background: var(--sidebar-bcg);
  padding-top: 2rem;
  overflow: scroll;
  overflow-x: hidden;
  transition: var(--long-transition);

  &.open {
    width: 100%;

    .container {
      opacity: 1;
    }
  }

  .container {
    padding: 0 24px;
    opacity: 0;
  }

  header {
    h1 {
      margin-top: 24px;
      letter-spacing: -0.5;
      line-height: 32px;
      font-size: 24px;

      span {
        color: var(--special-color);
      }
    }
  }
`;

export default SidebarEdit;
