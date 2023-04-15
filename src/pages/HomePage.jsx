import React from 'react'
import { Grid, Typography } from '@mui/material'
import { homeData } from '../assets/blogData'




export const HomePage = () => {
  return (
    <Grid 
      container  
      textAlign='center'
      justifyContent='center'
    >
      <Grid item xs={12}>
        <Typography 
          variant="h3" 
          mb='35px' 
          fontWeight={800}
        >
          {homeData.title}
        </Typography>
      </Grid>

      <Grid item xs={8} >
        <Typography variant="h5">
          {homeData.p1}
        </Typography>
        <Typography variant="h5" my='30px'>
          {homeData.p2}
        </Typography>
        <Typography variant="h5">
          {homeData.p3}
        </Typography>
      </Grid>
    </Grid>
  )
}
