import React from 'react'
import { useAuth } from '../hooks/useAuth';

export const LogoutPage = () => {
  
  const { logout } = useAuth();

  const onLogout = (e) =>{
    e.preventDefault();
    logout();
  }
  
  return (
    <>
      <h1>logout</h1>

      <form onSubmit={onLogout}>
        <h3>¿Seguro que quieres salir?</h3>
        <button type='submit'>
          Salir
        </button>
      </form>

    </>
  )
}
