import React from 'react'
import { useParams } from 'react-router-dom'
import { blogdata } from '../assets/blogData';

export const BlogPost = () => {
  
  const { slug } = useParams();

  const post = blogdata.find( p => p.slug === slug)

  console.log(slug);

  return (
    <h2>
      {post.title}
    </h2>
  )
}
