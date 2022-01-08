import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openNewSidebar } from '../../redux/actions/toggleActions';

const NewButton = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper
      type='button'
      className='new-btn'
      onClick={() => dispatch(openNewSidebar())}
    >
      <span>
        <FaPlus className='icon' />
      </span>
      <p>New</p>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: var(--purple-color);
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--white-color);
  border-radius: 20px;
  line-height: 0;
  padding: 6px;
  padding-right: 10px;
  transition: background 0.3s linear;

  &:hover {
    background: #9277ff;
  }

  p {
    color: var(--white-color);
  }

  span {
    width: 32px;
    height: 32px;
    background: var(--white-color);
    color: var(--purple-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 12px;
    }
  }
`;
export default NewButton;
