import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import HomePage from './youtube-app/components/HomePage'
// import './index.css'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <HomePage/> */}
  </StrictMode>,
)
