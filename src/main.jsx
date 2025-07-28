import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './global'
import App from './App.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
)