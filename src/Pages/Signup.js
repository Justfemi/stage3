import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../components/context/UserAuthContext';
import './style.css';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate('/')
    } catch (err) {
      // console.log(err);
      setError(err.message);
    }
  }
  return (
    <>
      <div className='container'>
        <h2>Sign Up</h2>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit} id='signup'>
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
              onChange={(e) => setPassword (e.target.value)}
            />
          </div>

          <div className='input-container'>
            <button>Sign up</button>
          </div>
        </form>
        <p>
          Already have an account?
          <Link to="/">
            Login
          </Link>
        </p>
      </div>
    </>
  )
}

export default Signup