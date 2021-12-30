import React from 'react';
import styled from 'styled-components';

const FilterForm = () => {
  return (
    <Wrapper>
      <div className="single-input">
        <input type="checkbox" name="draft" id="draft" />
        <label htmlFor="draft">Draft</label>
      </div>
      <div className="single-input">
        <input type="checkbox" name="draft" id="draft" />
        <label htmlFor="draft">Draft</label>
      </div>
      <div className="single-input">
        <input type="checkbox" name="draft" id="draft" />
        <label htmlFor="draft">Draft</label>
      </div>
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
  width: 140px;
  border-radius: 8px;
  height: 0;
  padding: 0;
  overflow: hidden;
 
  .single-input {
    display: flex;
    align-items: center;
    gap: 12px;
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
