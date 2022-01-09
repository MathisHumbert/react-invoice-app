import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilters } from '../../redux/actions/toggleActions';
import FilterForm from './FilterForm';
import NewButton from './NewButton';

const Header = () => {
  const dispatch = useDispatch();
  const { isFiltersOpen } = useSelector((state) => state.toggleReducer);
  const { all_invoices } = useSelector((state) => state.dataReducer);

  return (
    <Wrapper>
      <div className='left'>
        <h1>Invoices</h1>
        <p>
          {all_invoices.length} invoice{all_invoices.length > 1 && 's'}
        </p>
      </div>
      <div className='right'>
        <div>
          <button
            type='button'
            className='filter-btn'
            onClick={() => dispatch(toggleFilters())}
          >
            <p>Filter</p>
            {isFiltersOpen ? (
              <FaChevronUp className='icon' />
            ) : (
              <FaChevronDown className='icon' />
            )}
          </button>
          <FilterForm />
        </div>
        <NewButton />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  h1 {
    margin-bottom: 4px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 18px;
    position: relative;
  }

  .filter-btn {
    background: transparent;
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 8px;

    p {
      color: var(--primary-color);
    }

    .icon {
      font-size: 9px;
      color: var(--purple-color);
    }
  }
`;
export default Header;
