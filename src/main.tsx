import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { AuthProvider } from './features/auth/AuthProvider'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
  // </StrictMode>,
)
