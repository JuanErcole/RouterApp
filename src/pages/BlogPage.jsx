import React from 'react'
import { BlogLink } from '../components/BlogLink'
import { blogdata } from '../assets/blogData'
import { Outlet } from 'react-router-dom'

export const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
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
