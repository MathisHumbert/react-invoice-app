import styled from 'styled-components';
import { closeNewSidebar } from '../../redux/actions/toggleActions';
import {
  createInvoice,
  displayDataAlert,
} from '../../redux/actions/dataActions';
import { useDispatch, useSelector } from 'react-redux';
import { checkEmptyInput } from '../../utils/helpers';
import { resetItem } from '../../redux/actions/formActions';

const NewBtn = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.formReducer);

  const handleSaveSend = () => {
    const emptyInputs = checkEmptyInput(data.items);
    if (emptyInputs) {
      dispatch(displayDataAlert());
      return;
    }

    const invoice = { ...data, status: 'pending' };
    dispatch(createInvoice(invoice));
    setTimeout(() => {
      dispatch(closeNewSidebar());
      dispatch(resetItem());
    }, 1500);
  };

  const handleSaveDraft = () => {
    dispatch(createInvoice(data));
    setTimeout(() => {
      dispatch(closeNewSidebar());
      dispatch(resetItem());
    }, 1500);
  };

  const handleDiscard = () => {
    dispatch(closeNewSidebar());
    dispatch(resetItem());
  };

  return (
    <Wrapper>
      <button
        className='sidebar-btn discard'
        type='button'
        onClick={handleDiscard}
      >
        Discard
      </button>
      <button
        className='sidebar-btn draft'
        type='button'
        onClick={handleSaveDraft}
      >
        Save as Draft
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

  .discard {
    background: var(--ternary-bcg);
    color: var(--secondary-color);
  }

  .draft {
    background: var(--secondary-bcg);
    color: var(--special-color);
  }

  .send {
    background: var(--purple-color);
    color: var(--white-color);
  }
`;
export default NewBtn;
