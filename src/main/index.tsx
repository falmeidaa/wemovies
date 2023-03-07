import React from 'react'
import ReactDOM from 'react-dom/client'

import { worker } from './config'
import { Router } from './router'

if (process.env.NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
