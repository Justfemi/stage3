import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoutBtn  from '../assets/logout.png';
import './app.css';
import { useUserAuth } from './context/UserAuthContext';

const Header = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    try {
      await logOut();
      navigate('/')
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <header>
      <div className='gallery-logo'>
        <Link>
          <h1>Foto<span>Gallery</span></h1>
        </Link>
      </div>

      <div className='logout-bag'>
        <img src={ logoutBtn } onClick={ handleLogOut} alt='logout-icon'/>
      </div>
    </header>
  )
}

export default Header