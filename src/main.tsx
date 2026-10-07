import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { LikesProvider } from './context/LikesContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LikesProvider>
        <App />
      </LikesProvider>
    </BrowserRouter>
  </StrictMode>,
)