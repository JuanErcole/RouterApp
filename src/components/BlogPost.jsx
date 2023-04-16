import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../assets/blogData';
import { Button, Typography, Grid } from '@mui/material';
import 'animate.css';

export const BlogPost = () => {
  
  const [isVisible, setIsVisible] = useState(true)

  const navigate = useNavigate();
  const { slug } = useParams();


  const post = blogdata.find( p => p.slug === slug)

  const returnToBlog = () =>{
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
      className={`animate__animated ${ isVisible ? 'animate__backInDown' : 'animate__bounceOut'}`}
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
    </Grid>
    

  )
}
