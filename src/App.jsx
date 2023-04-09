import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'
import { BlogPage } from './pages/BlogPage'
import { NotFound } from './pages/NotFound'
import { MenuNav } from './pages/MenuNav'
import { PageContainer } from './components/PageContainer'


function App() {

  return (
    <HashRouter>
      <MenuNav />

      <PageContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageContainer>



    </HashRouter>
  )
}

export default App
