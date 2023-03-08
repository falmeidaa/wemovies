import React from 'react'
import ReactDOM from 'react-dom/client'

import { worker } from './config'
import { Router } from './router'

worker.start({ onUnhandledRequest: 'bypass' })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
