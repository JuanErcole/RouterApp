import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../assets/blogData';
import { Button, Typography } from '@mui/material';

export const BlogPost = () => {
  
  const navigate = useNavigate();
  const { slug } = useParams();

  const post = blogdata.find( p => p.slug === slug)

  const returnToBlog = () =>{
    navigate(`/blog`);
  }

  return (
    <>
      <Button 
        variant='contained'
        onClick={returnToBlog}
      >
        <Typography color="#fff">
          Cerrar
        </Typography>
      </Button>
      <h2>
        {post.title}
      </h2>
      <h6>
        {post.content}
      </h6>
      <h3>
        {post.author}
      </h3>
    </>

  )
}
