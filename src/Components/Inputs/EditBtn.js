import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditSidebar } from '../../redux/actions/toggleActions';
import { checkEmptyInput } from '../../utils/helpers';
import {
  updateInvoice,
  displayDataAlert,
} from '../../redux/actions/dataActions';
import { resetItem } from '../../redux/actions/formActions';

const EditBtn = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.formReducer);

  const handleSaveSend = () => {
    const emptyInputs = checkEmptyInput(data.items);
    if (emptyInputs) {
      dispatch(displayDataAlert());
      return;
    }

    const invoice = { ...data, status: 'pending' };
    dispatch(updateInvoice(data._id, invoice));
    setTimeout(() => {
      dispatch(closeEditSidebar());
      dispatch(resetItem());
    }, 1500);
  };

  const handleDiscard = () => {
    dispatch(closeEditSidebar());
    dispatch(resetItem());
  };

  return (
    <Wrapper>
      <button
        type='button'
        className='sidebar-btn cancel'
        onClick={handleDiscard}
      >
        Cancel
      </button>
      <button
        className='sidebar-btn send'
        type='button'
        onClick={handleSaveSend}
      >
        Save & Send
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--main-bcg);
  display: flex;
  justify-content: flex-end;
  margin-top: 88px;
  padding: 24px 0;
  gap: 8px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    top: -64px;
    left: -24px;
    width: calc(100% + 48px);
    height: 64px;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }

  .cancel {
    background: var(--ternary-bcg);
    color: var(--secondary-color);

    &:hover {
      background: var(--border-color);
    }
  }

  .send {
    background: var(--purple-color);
    color: var(--white-color);

    &:hover {
      background: var(--purple-hover-color);
    }
  }
`;
export default EditBtn;
