import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button, Grid, Typography } from '@mui/material';
import { useAuth } from '../hooks/useAuth';


export const LoginPage = () => {

  const [form, setForm] = useState({
    username : '',
    password : '',
  });

  const [isOk, setIsOk] = useState(null);
  const [error, setError] = useState({
    error: false,
    message: '',
  })

  const { login } = useAuth();

  const { username = '', password = '' } = form;
  

  const onInputChange = ({ target }) => {
    
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    })
  }


  const onSubmit = (e) => {
    
    e. preventDefault();
    login(username);
    console.log(username, password);

  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='h4'>
            Login
          </Typography>
        </Grid>

        <Grid item xs={12} >
          <form onSubmit={onSubmit}>
            <Grid
              item xs={6}
              display='flex'
              flexDirection='column'
              gap={1}
              m='0 auto'
            >
              <TextField
                label="user name"
                type='text'
                name='username'
                value={username}
                onChange={onInputChange}
              />
              <TextField
                label="password"
                type='password'
                name='password'
                value={password}
                onChange={onInputChange}
              />
              <Button
                variant='contained'
                type='submit'
              >
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  )
}
