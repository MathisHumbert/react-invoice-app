import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  toggleDeletion,
  openEditSidebar,
} from '../../redux/actions/toggleActions';
import { setItem } from '../../redux/actions/formActions';

const Footer = ({ invoice }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button
        className="sidebar-btn edit"
        onClick={() => {
          dispatch(openEditSidebar());
          dispatch(setItem(invoice));
        }}
      >
        Edit
      </button>
      <button
        className="sidebar-btn delete"
        onClick={() => dispatch(toggleDeletion())}
      >
        Delete
      </button>
      <button className="sidebar-btn paid">Mark as Paid</button>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: -24px;
  width: calc(100% + 48px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 8px;
  background: var(--main-bcg);
  padding: 24px;

  .edit {
    background: var(--ternary-bcg);
    color: var(--secondary-color);
  }

  .delete {
    background: var(--red-color);
    color: var(--white-color);
  }

  .paid {
    background: var(--purple-color);
    color: var(--white-color);
  }
`;
export default Footer;
