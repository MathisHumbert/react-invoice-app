import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import userImage from '../assets/image-avatar.jpg';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Navbar = () => {
  const light = true;
  return (
    <Wrapper>
      <div className="left">
        <img src={logo} alt="main-logo" />
      </div>
      <div className="right">
        {light ? (
          <BsFillMoonFill className="icon" />
        ) : (
          <BsFillSunFill className="icon" />
        )}
        <div className="vr"></div>
        <img src={userImage} alt="user-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--secondary-bcg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .left {
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    background: var(--purple-color);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    position: relative;
    z-index: 2;

    img {
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #9277ff;
      bottom: 0;
      left: 0;
      transform: translateY(50%);
      z-index: 1;
      border-top-left-radius: 20px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 24px;

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
    }
  }
`;
export default Navbar;
