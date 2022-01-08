import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { closeEditSidebar } from '../../redux/actions/toggleActions';
import { resetItem } from '../../redux/actions/formActions';

const GoBack = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={() => {
        dispatch(closeEditSidebar());
        dispatch(resetItem());
      }}
    >
      <FaChevronLeft className='icon' />
      <h4>Go back</h4>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  line-height: 0;
  gap: 24px;

  h4 {
    color: var(--primary-color);
    margin-top: 3px;
  }

  .icon {
    font-size: 9px;
    color: var(--purple-color);
  }
`;
export default GoBack;
