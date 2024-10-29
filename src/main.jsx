import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import GlobalStyles from './styles/globalStyles.js'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} theme='dark' />
    </AppProvider>
      <GlobalStyles />
  </StrictMode>,
)
