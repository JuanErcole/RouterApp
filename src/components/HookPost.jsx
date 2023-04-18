import React, { useState } from 'react'
import { HooksData } from '../assets/blogData';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

export const HookPost = () => {
  
  const [isVisible, setIsVisible] = useState(true)


  const navigate = useNavigate();
  const { slug } = useParams();


  const hook = HooksData.find( h => h.slug === slug)

  const returnToHooks = () =>{
    setIsVisible(false)
    setTimeout(() => {
      navigate(`/hooks`);
    }, 800);
  }

  return (
    <Grid
      container 
      bgcolor='#E0E0E0'
      padding='15px 20px' 
      className={`animate__animated animate__zoomInUp`}
    >
      <Grid item xs={12} >
        <Typography variant='h3' my='20px'>
          {hook.title}
        </Typography>
      </Grid>
      <Grid item xs={12} p='20px'>
          <Typography variant="h6">
            {hook.description}
          </Typography>
      </Grid>
      {/* Imagen */}
      <Grid item xs={12} p='20px'>
        <Typography variant="h6">
          {hook.using}
        </Typography>
      </Grid>
    </Grid>
  )
}
