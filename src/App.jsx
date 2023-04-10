import { HashRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Navigation } from './routes/Navigation'



function App() {

  return (
    <HashRouter>
      <AuthProvider>
        <Navigation/>  
      </AuthProvider>      
    </HashRouter>
  )
}

export default App
