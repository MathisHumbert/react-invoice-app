import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Alert from '../components/Alert';
import Logo from '../components/Logo';
import { displayAlert, registerUser } from '../redux/actions/userActions';

const inititalState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(inititalState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      dispatch(displayAlert());
      return;
    }

    const formUser = { name, email, password };

    if (isMember) {
      console.log('login');
    } else {
      dispatch(registerUser(formUser));
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <header>
          <div className='logo'>
            <Logo />
          </div>
          <h1>Invoice App</h1>
        </header>
        <h1 className='title'>{values.isMember ? 'Login' : 'Register'}</h1>
        {/* {showAlter && <Alert />} */}
        {!values.isMember && (
          <div className='input-container'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              onChange={handleChange}
              value={values.name}
            />
          </div>
        )}
        <div className='input-container'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <button type='submit' className='submit-btn'>
          Submit
        </button>
        <h3>
          {values.isMember ? 'Not a member yet' : 'Already a member'} ?{' '}
          <button type='button' className='toggle-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
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

  .submit-btn {
    margin-top: 2rem;
    padding: 26px 0;
    border-radius: 6px;
    text-transform: capitalize;
    line-height: 0;
    background: var(--purple-color);
    color: var(--white-color);
  }

  .toggle-btn {
    font-size: 16px;
    letter-spacing: -0.8px;
    line-height: 24px;
    background: transparent;
    color: var(--purple-color);
  }

  h3 {
    text-align: center;
    margin-top: 24px;

    a {
      color: var(--purple-color);
    }
  }
`;

export default RegisterPage;
