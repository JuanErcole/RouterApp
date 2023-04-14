import React from 'react'
import { BlogLink } from '../components/BlogLink'
import { blogdata } from '../assets/blogData'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'

export const BlogPage = () => {
  return (
    <div>
      <Typography variant="h2" >
        Blog
      </Typography>
      <Outlet/>

      <ul>
        {
          blogdata.map(post => (
            <BlogLink key={post.title} post={post}/>
          ))
        }
      </ul>
    </div>
  )
}
