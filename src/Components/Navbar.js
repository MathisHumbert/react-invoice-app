import styled from 'styled-components';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { UserImage, Logo } from './';

const Navbar = () => {
  const light = true;
  return (
    <Wrapper>
      <Logo />
      <div className='right'>
        {light ? (
          <BsFillMoonFill className='icon' />
        ) : (
          <BsFillSunFill className='icon' />
        )}
        <div className='vr'></div>
        <UserImage />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--secondary-bcg);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-right: 24px;

    .vr {
      width: 1px;
      height: 72px;
      background: #494e6e;
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .icon {
      font-size: 20px;
      color: var(--secondary-color);
      cursor: pointer;

      &:hover {
        color: var(--border-color);
      }
    }
  }
`;
export default Navbar;
