import { ListItemButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const BlogLink = ({ post }) => {
  return (
    
    <ListItemButton>
      <Link to={`/blog/${post.slug}`} >
        <Typography>
          {post.title}
        </Typography>
      </Link>
    </ListItemButton>
    
  )
}
