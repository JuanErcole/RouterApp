import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../assets/blogData';
import { Button, Typography, Grid } from '@mui/material';
import 'animate.css';
import { useAuth } from '../hooks/useAuth';

export const BlogPost = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [isConfirm, setIsConfirm] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();


  const post = blogdata.find(p => p.slug === slug);

  const onConfirm = () => {
    setIsConfirm(true);
    
    setTimeout(() => {

      const i = blogdata.findIndex(p => p.slug === slug);
      blogdata.splice(i, 1);
      navigate('/blog');

    }, 3000);
  }

  const onDelete = () => {
    setDeleted(true);
  }

  const onReset = () => {
    setDeleted(false);
    setIsConfirm(false);
  }

  const returnToBlog = () => {
    setIsVisible(false)
    setTimeout(() => {
      navigate(`/blog`);
    }, 800);
  }

  return (

    <Grid
      container
      bgcolor='#E0E0E0'
      padding='15px 20px'
      className={`animate__animated ${isVisible ? 'animate__backInDown' : 'animate__bounceOut'}`}
    >
      <Grid item xs={12}>
        <Button
          variant='contained'
          onClick={returnToBlog}
        >
          <Typography color="#fff">
            Cerrar
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} >
        <Typography variant='h3' my='20px'>
          {post.title}
        </Typography>
      </Grid>
      <Grid item xs={12} px='20px'>
        <Typography variant='h6' mb='20px'>
          {post.p1}
        </Typography>
        <Typography variant='h6' mb='20px'>
          {post.p2}
        </Typography>
        <Typography variant='h6' mb='20px'>
          {post.p3}
        </Typography>
        <Typography variant='h6'>
          {post.p4}
        </Typography>
      </Grid>

      {
        (auth.user?.isAdmin && !deleted ) && (

          <Grid item xs={12} px='20px'>
            <Button
              variant='outlined'
              color='error'
              onClick={onDelete}
            >
              <Typography fontWeight='600'>
                Eliminar Post
              </Typography>
            </Button>
          </Grid>
          
        )
      }

      {
        (auth.user?.isAdmin && deleted && !isConfirm) && (

          <Grid item xs={12} px='20px'>

            <Typography variant="h5">
              ¿Esta seguro que desea eliminar el post?
            </Typography>

            <Button
              variant='outlined'
              color='error'
              onClick={onConfirm}
            >
              <Typography fontWeight='600'>
                Confirmar
              </Typography>
            </Button>

            <Button
              variant='outlined'
              color='error'
              onClick={onReset}
            >
              <Typography fontWeight='600'>
                Me arrepenti
              </Typography>
            </Button>

          </Grid>

        )
      }
      {
        (auth.user?.isAdmin && isConfirm) && (

          <Grid item xs={12} px='20px'>

            <Typography variant="h5">
              Eliminando...
            </Typography>

          </Grid>

        )
      }

    </Grid>


  )
}
