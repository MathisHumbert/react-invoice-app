import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import StatusButton from '../StatusButton';
import { formatDate, formatPrice } from '../../utils/helpers';

const SingleInvoice = ({ _id, clientName, createdAt, items, status }) => {
  const { total } = items[0];

  return (
    <Link to={`/invoice/${_id}`} style={{ textDecoration: 'none' }}>
      <Wrapper>
        <h4>
          <span>#</span>
          {_id.substring(18, 24).toUpperCase()}
        </h4>
        <p className='date'>{formatDate(createdAt)}</p>
        <p className='name'>{clientName === '' ? 'unknown' : clientName}</p>
        <h3>{formatPrice(total)}</h3>
        <StatusButton status={status} />
        <span className='right-icon'>
          <FaChevronRight />
        </span>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.article`
  background: var(--main-bcg);
  height: 134px;
  width: 100%;
  position: relative;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border: 2px solid transparent;
  transition: color 0.5s ease-in-out, background 0.5s ease-in-out,
    border 0.3s ease-in-out;

  &:hover {
    border-color: var(--purple-color);
  }

  a {
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  h4 {
    position: absolute;
    left: 24px;
    top: 24px;

    span {
      color: var(--special-color);
    }
  }

  .name {
    position: absolute;
    right: 24px;
    top: 24px;
  }

  .date {
    position: absolute;
    left: 24px;
    bottom: 52px;
  }

  h3 {
    position: absolute;
    left: 24px;
    bottom: 24px;
  }

  button {
    position: absolute;
    right: 24px;
    bottom: 24px;
    cursor: inherit;
  }

  .right-icon {
    display: none;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    min-height: 72px;
    display: grid;
    grid-template-columns: repeat(5, 1fr) auto;
    align-items: center;
    padding: 0 24px;

    a,
    h4,
    .name,
    .date,
    h3,
    button {
      position: inherit;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .right-icon {
      display: block;
      width: 100%;
      font-size: 12px;
      color: var(--purple-color);
    }
  }
`;
export default SingleInvoice;
