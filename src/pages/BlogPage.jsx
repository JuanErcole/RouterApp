import React from 'react'
import { CustomLink } from '../components/CustomLink'
import { blogdata } from '../assets/blogData'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'

export const BlogPage = () => {

  return (
    <Grid container textAlign='center'>
      <Grid item xs={12}>
        <Typography variant="h2" >
          Blog
        </Typography>
      </Grid>
      <Grid item xs={12} my='15px'>
        <Outlet />
      </Grid>
      <Grid 
        item 
        xs={12} 
        display='flex' 
        justifyContent='center' 
        gap={1}
      >
        {
          blogdata.map(post => (
            <CustomLink key={post.title} page='blog' post={post} />
          ))
        }
      </Grid>

    </Grid>
  )
}
