import React from 'react'
import { MenuNav } from '../components/MenuNav'
import { Route, Routes } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { HomePage } from '../pages/HomePage'
import { BlogPage } from '../pages/BlogPage'
import { BlogPost } from '../components/BlogPost'
import { NotFound } from '../pages/NotFound'
import { ProfilePage } from '../pages/ProfilePage'
import { LogoutPage } from '../pages/LogoutPage'
import { LoginPage } from '../pages/LoginPage'

export const Navigation = () => {
  
  return (
    <>
      <MenuNav />

        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/blog" element={<BlogPage />} >
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageContainer>
    </>


  )
}
