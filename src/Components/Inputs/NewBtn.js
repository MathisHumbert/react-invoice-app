import styled from 'styled-components';
import { closeNewSidebar } from '../../redux/actions/toggleActions';
import { createInvoice } from '../../redux/actions/dataActions';
import { displayAlert } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { checkEmptyInput } from '../../utils/helpers';
import { resetItem } from '../../redux/actions/formActions';

const NewBtn = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.formReducer);

  const handleSaveSend = () => {
    const emptyInputs = checkEmptyInput(data.items);
    if (emptyInputs) {
      dispatch(displayAlert());
      return;
    }

    const invoice = { ...data, status: 'pending' };
    dispatch(createInvoice(invoice));
    dispatch(closeNewSidebar());
    dispatch(resetItem());
  };

  const handleSaveDraft = () => {
    dispatch(createInvoice(data));
    dispatch(closeNewSidebar());
    dispatch(resetItem());
  };

  const handleDiscard = () => {
    dispatch(closeNewSidebar());
    dispatch(resetItem());
  };

  return (
    <Wrapper>
      <button className='sidebar-btn discard' onClick={handleDiscard}>
        Discard
      </button>
      <button className='sidebar-btn draft' onClick={handleSaveDraft}>
        Save as Draft
      </button>
      <button className='sidebar-btn send' onClick={handleSaveSend}>
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
