import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const CustomLink = ({page, post }) => {
  return (
    
    <Button variant='outlined'>
      <Link to={`/${page}/${post.slug}`} >
        <Typography variant='h5'>
          {post.title}
        </Typography>
      </Link>
    </Button>
    
  )
}
