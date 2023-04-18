import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Grid, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { HooksData } from '../assets/blogData';
import { CustomLink } from '../components/CustomLink';

export const HooksPage = () => {

  const { user } = useAuth();

  return (
    <>
      <Grid container>

        <Grid 
          item xs={12} 
          textAlign='center'
          mb='15px'
        >
          <Typography variant='h3' >
            Bienvenido <b>{user}</b>
          </Typography>
        </Grid>
        <Grid 
          item xs={12} 
          textAlign='center'
          mb='15px'
        >
          <Typography variant='h5'>
            A continuacion te dejamos algunos de los hooks de React-router-dom
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display='flex'
          justifyContent='center'
          gap={1}
        >
          {
            HooksData.map(hook => (
              <CustomLink key={hook.title} page='hooks' post={hook} />
            ))
          }
        </Grid>
        <Grid item xs={12} my='15px'>
          <Outlet />
        </Grid>

      </Grid>
    </>
  )
}
