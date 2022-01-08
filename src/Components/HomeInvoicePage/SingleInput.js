import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StatusButton from '../StatusButton';
import { formatDate, formatPrice } from '../../utils/helpers';

const SingleInput = ({ _id, clientName, createdAt, items, status }) => {
  const { total } = items[0];

  return (
    <Link to={`/invoice/${_id}`}>
      <Wrapper>
        <h4>
          <span>#</span>
          {_id.substring(18, 24).toUpperCase()}
        </h4>
        <p className='date'>{formatDate(createdAt)}</p>
        <p className='name'>{clientName === '' ? 'unknown' : clientName}</p>
        <h3>{formatPrice(total)}</h3>
        <StatusButton status={status} />
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
  transition: border 0.3s linear;

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
      color: var(--secondary-color);
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
`;
export default SingleInput;
