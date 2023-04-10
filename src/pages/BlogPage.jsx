import React from 'react'
import { BlogLink } from '../components/BlogLink'
import { blogdata } from '../assets/blogData'

export const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>

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
