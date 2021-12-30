import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilters } from '../../redux/actions/toggleActions';
import styled from 'styled-components';

const data = ['draft', 'pending', 'paid'];
const FilterForm = () => {
  const handleSubmit = (e) => {
    console.log(e.target.name);
    setTimeout(() => {
      dispatch(toggleFilters());
    }, 400);
  };
  const dispatch = useDispatch();
  const { isFiltersOpen } = useSelector((state) => state.toggleReducer);
  return (
    <Wrapper className={isFiltersOpen ? 'active' : null}>
      {data.map((item, index) => {
        return (
          <div className="single-input" key={index}>
            <input
              type="checkbox"
              name={item}
              id={item}
              onChange={handleSubmit}
              // checked={false}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-25%, calc(100% + 10px));
  background: var(--main-bcg);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 160px;
  height: 0;
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;
  padding: 0 24px;
  opacity: 0;
  transition: height 0.4s linear, opacity 0.4s linear;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:first-child {
    padding-top: 2rem;
  }

  &.active {
    height: 131px;
    opacity: 1;
  }

  .single-input {
    display: flex;
    align-items: center;
    gap: 12px;

    &:first-child {
      padding-top: 24px;
    }
    &:last-child {
      padding-bottom: 24px;
    }
  }

  input,
  label {
    cursor: pointer;
  }

  label {
    font-weight: 700;
    font-size: 12px;
    color: var(--primary-color);
    letter-spacing: -0.25px;
    margin-top: 3px;
  }

  input[type='checkbox'] {
    appearance: none;
    margin: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 2px;
    background: #dfe3fa;
    display: grid;
    place-content: center;
    transition: background 0.4s ease-in-out;
    cursor: pointer;
  }

  input[type='checkbox']::before {
    content: '';
    width: 10px;
    height: 8px;
    transform: scale(0);
    transition: transform 0.4s ease-in-out;
    background: #fff;
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
  input[type='checkbox']:checked {
    background: var(--purple-color);
  }
`;
export default FilterForm;
