import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Grid, Typography } from '@mui/material';

export const HooksPage = () => {
  
  const { user } = useAuth();

  return (
    <>
      <Grid container>

        <Grid item xs={12}>
          <Typography variant='h4' >
            Bienvenido <b>{user}</b> 
          </Typography>
        </Grid>

        <Grid item>
          
        </Grid>

      </Grid>
    </>
  )
}
