import styled from 'styled-components';
import image from '../../assets/illustration-empty.svg';

const NoInvoices = () => {
  return (
    <Wrapper>
      <img src={image} alt='no-input-img' />
      <h1>There is nothing here</h1>
      <p>
        Create an invoice by clicking the <br />{' '}
        <span>
          New <p className='large'>Invoice</p>
        </span>{' '}
        button and get started
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;

    span {
      font-weight: 700;
    }
  }

  img {
    width: 70%;
    max-width: 600px;
  }

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;
export default NoInvoices;
