import React from 'react'
import { BlogLink } from '../components/BlogLink'
import { blogdata } from '../assets/blogData'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Button, Grid } from '@mui/material'

export const BlogPage = () => {
  return (
    <Grid container textAlign='center'>
      <Grid item xs={12}>
        <Typography variant="h2" >
          Blog
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
      <Grid 
        item 
        xs={12} 
        display='flex' 
        justifyContent='center' 
      >
        {
          blogdata.map(post => (
            <BlogLink key={post.title} post={post} />
          ))
        }
      </Grid>

    </Grid>
  )
}
