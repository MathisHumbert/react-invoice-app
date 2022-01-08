import styled from 'styled-components';
import StatusButton from '../StatusButton';

const Header = ({ status }) => {
  return (
    <Wrapper>
      <p>Status</p>
      <StatusButton status={status} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: var(--main-bcg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-radius: 8px;
  margin-top: 2rem;
`;
export default Header;
