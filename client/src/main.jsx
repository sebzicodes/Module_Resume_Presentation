import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as BrowserRouter } from 'react-router-dom'
import { ModuleProvider } from './context/ModuleContext'
import App from './App'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ModuleProvider>
        <App />
      </ModuleProvider>
    </BrowserRouter>
  </StrictMode>
)
