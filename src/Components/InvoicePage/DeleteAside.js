import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleDeletion } from '../../redux/actions/toggleActions';

const DeleteAside = () => {
  const dispatch = useDispatch();
  const { isDeletionOpen } = useSelector((state) => state.toggleReducer);

  return (
    <Wrapper className={isDeletionOpen ? 'open' : null}>
      <div className="deletion">
        <h1>Confirm Deletion</h1>
        <p>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <div className="buttons">
          <button
            className="sidebar-btn cancel"
            onClick={() => dispatch(toggleDeletion())}
          >
            Cancel
          </button>
          <button className="sidebar-btn delete">Delete</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  transition: height 0.6s linear;

  &.open {
    height: 100%;
  }

  .deletion {
    background: var(--main-bcg);
    padding: 32px;
    border-radius: 8px;

    p {
      margin-top: 18px;
      margin-bottom: 24px;
      line-height: 22px;
    }
  }

  .buttons {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  .cancel {
    width: 91px;
    background: var(--ternary-bcg);
    color: var(--secondary-color);
  }

  .delete {
    width: 91px;
    background: var(--red-color);
    color: var(--white-color);
  }
`;

export default DeleteAside;
