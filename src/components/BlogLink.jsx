import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const BlogLink = ({ post }) => {
  return (
    
    <Button variant='outlined'>
      <Link to={`/blog/${post.slug}`} >
        <Typography variant='h5'>
          {post.title}
        </Typography>
      </Link>
    </Button>
    
  )
}
