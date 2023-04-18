import React from 'react'
import { MenuNav } from '../components/MenuNav'
import { Route, Routes } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { HomePage } from '../pages/HomePage'
import { BlogPage } from '../pages/BlogPage'
import { BlogPost } from '../components/BlogPost'
import { NotFound } from '../pages/NotFound'
import { LogoutPage } from '../pages/LogoutPage'
import { LoginPage } from '../pages/LoginPage'
import { useAuth } from '../hooks/useAuth'
import { HooksPage } from '../pages/HooksPage'
import { HookPost } from '../components/HookPost'

export const Navigation = () => {

  const { user } = useAuth();

  return (
    <>
      { user && <MenuNav /> }

      <PageContainer>
        <Routes>
          {
            (user)
            ? (
                <>
                  <Route path="/" element={<HomePage />} />
        
                  <Route path="/blog" element={<BlogPage />} >
                    <Route path=":slug" element={<BlogPost />} />
                  </Route>
        
                  <Route path="/logout" element={<LogoutPage />} />

                  <Route path="/hooks" element={<HooksPage />} >
                    <Route path=":slug" element={<HookPost />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </>
              )
            : (
                <>
                  <Route path="/login " element={<LoginPage />} />
                  <Route path="*" element={<LoginPage />} />
                </>
              )
          }
        </Routes>
      </PageContainer>
    </>


  )
}
