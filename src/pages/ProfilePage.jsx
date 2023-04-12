import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Typography } from '@mui/material';

export const ProfilePage = () => {
  
  const { user } = useAuth();

  return (
    <>
      <Typography variant='h4' >
        Perfil de <b>{user}</b> 
      </Typography>
    </>
  )
}
