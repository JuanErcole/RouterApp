import React from 'react'
import { Link } from 'react-router-dom'

export const BlogLink = ({ post }) => {
  return (
    
    <li>
      <Link to={`/blog/${post.slug}`} >
        <h4>{post.title}</h4>
      </Link>
    </li>
    
  )
}
