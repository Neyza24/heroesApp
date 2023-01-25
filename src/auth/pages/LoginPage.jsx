import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

export const LoginPage = () => {

  

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();
 

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login( 'Shelly Cooper');

    navigate(lastPath, {
      replace: true
  })


  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center  gap-2 m-4 animate__animated animate__fadeIn animate__slow'>
      <h1>LOGIN PAGE</h1>
      
      <p >Dale click al botón de login para continuar</p>

      <button
        className='btn btn-primary mt-4'
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  )
}

