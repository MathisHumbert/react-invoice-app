import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <header>
          <div className="logo">
            <Logo />
          </div>
          <h1>Invoice App</h1>
        </header>
        <h1 className="title">Login</h1>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Submit</button>
        <h3>
          Not a member yet ? <Link to="/register">Register</Link>
        </h3>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  padding: 2rem 24px;

  form {
    width: 100%;
    background: var(--main-bcg);
    padding: 24px;
    border-radius: 8px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  header {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-bottom: 3rem;
    align-self: center;
  }

  .input-container {
    margin-top: 24px;
  }

  input {
    background: transparent;
    width: 100%;
    margin-top: 10px;
    border: 1px solid var(--border-color);
    padding: 17px 0 17px 20px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-color);
    line-height: 0;
    letter-spacing: -0.25px;
    font-family: 'Spartan', sans-serif;
    transition: border 0.3s linear;

    &:focus {
      outline: none;
      border: 1px solid var(--purple-color);
    }

    &::placeholder {
      color: var(--primary-color);
      opacity: 0.5;
    }
  }

  label {
    color: var(--secondary-color);
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
  }

  .title {
    align-self: center;
    margin-bottom: 8px;
  }

  button {
    margin-top: 2rem;
    padding: 26px 0;
    border-radius: 6px;
    text-transform: capitalize;
    line-height: 0;
    background: var(--purple-color);
    color: var(--white-color);
  }

  h3 {
    text-align: center;
    margin-top: 24px;

    a {
      color: var(--purple-color);
    }
  }
`;

export default LoginPage;
