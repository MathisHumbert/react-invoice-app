import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt='main-logo' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
`;
export default Logo;
