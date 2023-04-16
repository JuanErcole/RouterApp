import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { Button, Grid, Typography } from '@mui/material';

export const LogoutPage = () => {
  
  const { logout } = useAuth();

  const onLogout = (e) =>{
    e.preventDefault();
    logout();
  }
  
  return (
    <Grid
      container 
      textAlign='center' 
      justifyContent='center'
    >
      <Grid item xs={12} textAlign='center'>
        <Typography variant='h3'>
          Logout
        </Typography>
      </Grid>

      <form onSubmit={onLogout}>
        <Typography variant='h4' my='30px'>
          ¿Seguro que quieres salir?
        </Typography>
        <Button variant='contained' type='submit'>
          Salir
        </Button>
      </form>

    </Grid>
  )
}
