import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{ArticulosProviderWrapper} from './contexts/mostrar.producto.jsx'
import{AutetificacionProviderWrapper} from './contexts/Conectar.Login.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AutetificacionProviderWrapper>
  <ArticulosProviderWrapper>
      
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  </ArticulosProviderWrapper>
  </AutetificacionProviderWrapper>

    
    // </StrictMode> 
)
