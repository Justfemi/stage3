import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../components/context/UserAuthContext';
import './style.css';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate('/home')
    } catch (err) {
      // console.log(err);
      setError(err.message);
    }
  }

  return (
    <>
      <div className='container'>
        <h2>Login</h2>
        {error && <div>{error}</div>}
        <form id='login' onSubmit={handleSubmit}>
          <div className='input-container'>
            <input 
              placeholder='Enter your email' 
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <input 
              placeholder='Enter your password' 
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <button>Login</button>
          </div>
        </form>
        <p>
          Create an account?
          <Link to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </>
  )
}

export default Login